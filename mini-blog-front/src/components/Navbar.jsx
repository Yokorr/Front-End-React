import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-links">
        
        <Link to="/" className="nav-item">Accueil</Link>
        
        {user ? (
          <>
            <Link to="/my-articles" className="nav-item">Mes Articles</Link>
            <Link to="/create" className="nav-item btn-create">Créer un Article</Link>
            <button onClick={logout} className="logout-btn">Déconnexion ({user.email})</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-item">Connexion</Link>
            <Link to="/register" className="nav-item">Inscription</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;