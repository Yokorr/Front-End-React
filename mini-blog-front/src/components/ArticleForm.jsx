import { useState } from 'react';

const ArticleForm = ({ onSubmit, initialData = { title: '', content: '' } }) => {
  const [formData, setFormData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="article-form">
      <input 
        type="text" 
        placeholder="Titre de l'article" 
        value={formData.title} 
        onChange={(e) => setFormData({...formData, title: e.target.value})} 
        required 
      />
      <textarea 
        placeholder="Contenu de l'article..." 
        value={formData.content} 
        onChange={(e) => setFormData({...formData, content: e.target.value})} 
        required 
        rows="10"
      />
      <button type="submit">Publier l'article</button>
    </form>
  );
};

export default ArticleForm;