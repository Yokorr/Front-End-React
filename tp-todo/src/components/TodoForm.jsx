import { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return; // Empêche d'ajouter du vide
    addTask(value);
    setValue(""); // Réinitialise l'input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={value}
        placeholder="Ajouter une tâche..."
        onChange={(e) => setValue(e.target.value)} 
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TodoForm;