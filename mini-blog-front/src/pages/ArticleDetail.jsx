import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../lib/api';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/articles/${id}`)
      .then(setArticle)
      .catch(() => navigate('/404'));
  }, [id, navigate]);

  if (!article) return <div>Chargement...</div>;

  return (
    <div className="container article-detail">
      <h1>{article.title}</h1>
      <p className="meta">Par <strong>{article.authorName}</strong> le {article.date}</p>
      <hr />
      <div className="article-content">
        {article.content}
      </div>
      <button onClick={() => navigate(-1)} style={{marginTop: '20px'}}>Retour</button>
    </div>
  );
};

export default ArticleDetail;