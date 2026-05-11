import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

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

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ lineHeight: '1.2', marginBottom: '30px', paddingTop: '10px' }}>
        Gestionnaire de Contacts
      </h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} editContact={editContact} />
    </div>
  );
}

export default App;