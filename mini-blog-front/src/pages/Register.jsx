import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth(); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      alert("Compte créé avec succès ! Connectez-vous.");
      navigate('/login');
    } catch (err) {
      alert("Erreur lors de l'inscription : " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;