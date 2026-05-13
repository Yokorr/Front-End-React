import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.get('/articles').then(setArticles).catch(console.error);
  }, []);

  return (
    <div className="home-page">
      <h1>Tous les Articles</h1>
      <div className="articles-grid">
        {articles.map(art => (
          <div key={art.id} className="article-card">
            <h3>{art.title}</h3>
            <p>Par {art.authorName} le {art.date}</p>
            <Link to={`/article/${art.id}`} className="read-more">Lire la suite</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;