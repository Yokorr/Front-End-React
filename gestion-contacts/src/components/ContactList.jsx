import ContactItem from './ContactItem';

const ContactList = ({ contacts, deleteContact, editContact }) => {
  return (
    <div>
      <h3>Liste des contacts ({contacts.length})</h3>
      {contacts.map(c => (
        <ContactItem key={c.id} contact={c} deleteContact={deleteContact} editContact={editContact} />
      ))}
    </div>
  );
};

export default ContactList;