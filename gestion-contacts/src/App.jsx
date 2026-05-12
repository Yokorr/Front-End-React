import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { api } from './lib/api';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './contexts/AuthContext';


function App() {

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const { user } = useAuth();
  const addContact = (data) => {
    const newContact = { ...data, id: Date.now() };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const editContact = (id, updatedContact) => {
    setContacts(contacts.map(c => c.id === id ? updatedContact : c));
  };

  

  useEffect(() => {
    if(user) {
      api.get('/contacts').then(setContacts);
    }
    }, [user]);

  return (

    <div>
      <nav> 
        <Link to="/addcontact">Add Contact</Link>
        <Link to="/">Contact List</Link>
        <Link to="/login">Login</Link>
      </nav>
    

    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <ContactList contacts={contacts} deleteContact={deleteContact} editContact={editContact} />
        </ProtectedRoute>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/addcontact" element={
        <ProtectedRoute>
          <ContactForm addContact={addContact} />
        </ProtectedRoute>
      } />
    </Routes>

  </div>
    
  );
}

export default App;