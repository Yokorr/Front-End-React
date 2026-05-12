import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await login(email, password);
      
      navigate('/');
    } catch (error) {
      alert("Erreur lors de la connexion : " + error.message);
    }
  };

  return (
    <div style={{ maxWidth: '350px', margin: '80px auto', textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h2>Espace Connexion</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="email" 
          placeholder="Email (ex: admin@test.com)" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required 
          style={{ padding: '10px' }}
        />
        <input 
          type="password" 
          placeholder="Mot de passe (ex: password)" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          required 
          style={{ padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
          Se connecter
        </button>
      </form>
      <p style={{ fontSize: '0.8em', color: '#666', marginTop: '15px' }}>
        Note : Utilisez les identifiants configurés dans le serveur.
      </p>
    </div>
  );
};

export default Login;