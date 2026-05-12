import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { api } from './lib/api';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login'; 

function App() {
  const [todos, setTodos] = useState([]);
  const { user, logout } = useAuth();

  useEffect(() => {
    if (user) {
      api.get('/todos').then(setTodos).catch(console.error);
    }
  }, [user]);

  const addTask = async (text) => {
    const newTodo = await api.post('/todos', { text });
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      setTodos(todos.filter(t => t.id !== id));
    } catch (error) {
      console.error("Erreur suppression :", error);
    }
  };

  return (
    <div className="App">
      <nav style={{ padding: '10px', background: '#eee', marginBottom: '20px' }}>
        <Link to="/">Ma Liste</Link> | 
        {user ? (
          <button onClick={logout} style={{ marginLeft: '10px' }}>Déconnexion ({user.email})</button>
        ) : (
          <Link to="/login" style={{ marginLeft: '10px' }}>Connexion</Link>
        )}
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={
          <ProtectedRoute>
            <h1>Ma To-Do List Fullstack</h1>
            <TodoForm addTask={addTask} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;