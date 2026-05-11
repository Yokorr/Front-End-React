import { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName) return; // Sécurité minimum
    addContact(formData);
    setFormData({ firstName: '', lastName: '', email: '', phone: '' }); // On vide le formulaire
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input type="text" placeholder="Prénom" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
      <input type="text" placeholder="Nom" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
      <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
      <input type="tel" placeholder="Téléphone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
      <button type="submit">Ajouter le contact</button>
    </form>
  );
};

export default ContactForm;