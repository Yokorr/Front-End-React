import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Ajouter une tâche
  const addTask = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Cocher/Décocher
  const toggleTask = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  // Supprimer
  const deleteTask = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="App">
      <p>Ma Liste de Tâches</p> <br />
      <TodoForm addTask={addTask} />
      <TodoList todos={todos} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;