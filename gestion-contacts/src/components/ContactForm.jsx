import { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(formData);
    setFormData({ firstName: '', lastName: '', email: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      
      <input 
        type="text" 
        placeholder="Prénom" 
        required 
        value={formData.firstName} 
        onChange={(e) => setFormData({...formData, firstName: e.target.value})} 
      />

      <input 
        type="text" 
        placeholder="Nom" 
        required 
        value={formData.lastName} 
        onChange={(e) => setFormData({...formData, lastName: e.target.value})} 
      />

      <input 
        type="email" 
        placeholder="Email" 
        required 
        value={formData.email} 
        onChange={(e) => setFormData({...formData, email: e.target.value})} 
      />

      <input 
        type="tel" 
        placeholder="Téléphone" 
        required 
        value={formData.phone} 
        onChange={(e) => setFormData({...formData, phone: e.target.value})} 
      />

      <button type="submit">Ajouter le contact</button>
    </form>
  );
};

export default ContactForm;