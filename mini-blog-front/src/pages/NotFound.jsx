import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>404 - Page Introuvable</h1>
      <p>Désolé, cette page n'existe pas.</p>
      <Link to="/">Retourner à l'accueil</Link>
    </div>
  );
};

export default NotFound;