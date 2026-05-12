require('dotenv').config();

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3002;
const JWT_SECRET = process.env.JWT_SECRET
const users = [];
(async () => {
    const hashedPassword = await bcrypt.hash('password', 10);
    users.push({ id: 1, email: 'admin@test.com', password: hashedPassword });
})();

function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Authorization header is missing' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}

const contacts = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', phone: '098-765-4321' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', email: 'bob@example.com', phone: '555-555-5555' },
];

let id=3;

app.get('/contacts',requireAuth, (req, res) => {
    res.json(contacts);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/contacts', requireAuth, (req, res) => {
    const newContact = req.body;
    newContact.id = ++id;
    contacts.push(newContact);
    res.json(newContact);
});

app.put('/contacts/:id', requireAuth, (req, res) => {
    const id = parseInt(req.params.id);
    const index = contacts.findIndex(c => c.id === id);
    if (index !== -1) {
        return res.json(contacts[index] = req.body);
    }
    res.status(404).json({ error: 'Contact not found' });
});

app.delete('/contacts/:id', requireAuth, (req, res) => {
    const id = parseInt(req.params.id);
    const index = contacts.findIndex(c => c.id === id);
    if (index !== -1) {
        contacts.splice(index, 1);
        return res.json({ message: 'Contact deleted' });
    }
    res.status(404).json({ error: 'Contact not found' });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    res.json({ token });
});