import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => (
  <div className="article-card">
    <h3>{article.title}</h3>
    <p>Par {article.authorName} le {article.date}</p>
    <Link to={`/article/${article.id}`} className="btn-detail">Lire l'article</Link>
  </div>
);

export default ArticleCard;