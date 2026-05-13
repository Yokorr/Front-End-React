import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateArticle from './pages/CreateArticle';
import MyArticles from './pages/MyArticles';
import ArticleDetail from './pages/ArticleDetail'; 
import EditArticle from './pages/EditArticle'; 
import NotFound from './pages/NotFound'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="content">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/article/:id" element={<ArticleDetail />} />

          
          <Route path="/create" element={
            <ProtectedRoute> <CreateArticle /> </ProtectedRoute>
          } />
          <Route path="/edit/:id" element={
            <ProtectedRoute> <EditArticle /> </ProtectedRoute>
          } />
          <Route path="/my-articles" element={
            <ProtectedRoute> <MyArticles /> </ProtectedRoute>
          } />

        
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;