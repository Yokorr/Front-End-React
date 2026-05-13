import { api } from '../lib/api';
import { useNavigate } from 'react-router-dom';
import ArticleForm from '../components/ArticleForm';

const CreateArticle = () => {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      await api.post('/articles', data);
      alert("Article publié !");
      navigate('/'); 
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  };

  return (
    <div className="container">
      <h2>Rédiger un nouvel article</h2>
      <ArticleForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreateArticle;