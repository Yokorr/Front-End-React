import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import ArticleForm from '../components/ArticleForm';

const EditArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/articles/${id}`)
      .then(setArticle)
      .catch(() => navigate('/404'));
  }, [id, navigate]);

  const handleUpdate = async (data) => {
    try {
      await api.put(`/articles/${id}`, data);
      alert("Article mis à jour !");
      navigate('/my-articles');
    } catch (err) {
      alert("Erreur lors de la modification : " + err.message);
    }
  };

  if (!article) return <div>Chargement...</div>;

  return (
    <div className="container">
      <h2>Modifier l'article</h2>
      <ArticleForm 
        onSubmit={handleUpdate} 
        initialData={{ title: article.title, content: article.content }} 
      />
    </div>
  );
};

export default EditArticle;