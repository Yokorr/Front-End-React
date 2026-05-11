const ContactItem = ({ contact, deleteContact, editContact }) => {
  const handleEdit = () => {
    const newName = prompt("Nouveau nom :", contact.lastName);
    if (newName) {
      editContact(contact.id, { ...contact, lastName: newName });
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '8px' }}>
      <p><strong>{contact.firstName} {contact.lastName}</strong></p>
      <p>📧 {contact.email} | 📞 {contact.phone}</p>
      <button onClick={handleEdit}>Modifier le nom</button>
      <button onClick={() => deleteContact(contact.id)} style={{ color: 'red', marginLeft: '10px' }}>Supprimer</button>
    </div>
  );
};

export default ContactItem;