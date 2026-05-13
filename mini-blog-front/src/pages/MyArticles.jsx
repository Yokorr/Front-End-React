import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const MyArticles = () => {
  const [myArticles, setMyArticles] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const loadArticles = async () => {
      const allArticles = await api.get('/articles');
      const filtered = allArticles.filter(a => a.authorName === user.email);
      setMyArticles(filtered);
    };
    loadArticles();
  }, [user]);

  const handleDelete = async (id) => {
    if (window.confirm("Supprimer cet article ?")) {
      await api.delete(`/articles/${id}`);
      setMyArticles(myArticles.filter(a => a.id !== id));
    }
  };

  return (
  <div className="container">
    <h1>Mes publications</h1>
    {myArticles.length === 0 ? (
      <p>Vous n'avez pas encore écrit d'articles.</p>
    ) : (
      <div className="articles-list">
        {myArticles.map(art => (
          <div key={art.id} className="article-item-manage">
            <h3>{art.title}</h3>
            <p>Publié le {art.date}</p>
            <div className="actions" style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <Link to={`/edit/${art.id}`} className="btn-edit">
                Modifier
              </Link>
              <button 
                onClick={() => handleDelete(art.id)} 
                className="btn-delete"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
};


export default MyArticles;