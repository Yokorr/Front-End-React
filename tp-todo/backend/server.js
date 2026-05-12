require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3002;
const JWT_SECRET = process.env.JWT_SECRET;

const users = [];
const todos = [
    { id: 1, text: 'Apprendre React', completed: false },
    { id: 2, text: 'Connecter le backend', completed: true },
];

let idTracker = 2;

// Middleware 
function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'Auth missing' });
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}

// Routes
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (email === 'admin@test.com' && password === 'password') {
        const token = jwt.sign({ userId: 1 }, JWT_SECRET);
        return res.json({ token });
    }
    res.status(401).json({ error: 'Identifiants invalides' });
});

app.get('/todos', requireAuth, (req, res) => res.json(todos));

app.post('/todos', requireAuth, (req, res) => {
    const newTodo = { id: ++idTracker, text: req.body.text, completed: false };
    todos.push(newTodo);
    res.json(newTodo);
});

app.delete('/todos/:id', requireAuth, (req, res) => {
    const todoId = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === todoId);
    if (index !== -1) {
        todos.splice(index, 1);
        return res.json({ message: 'Deleted' });
    }
    res.status(404).json({ error: 'Non trouvé' });
});

app.listen(PORT, () => console.log(`Backend sur port ${PORT}`));