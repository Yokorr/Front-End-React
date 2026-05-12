const TodoItem = ({ task, deleteTodo }) => { 
  return (
    <div className="todo-card">
      <span className="todo-text">{task.text}</span>
      <button 
        className="delete-btn" 
        onClick={() => deleteTodo(task.id)} 
      >
        Supprimer
      </button>
    </div>
  );
};

export default TodoItem;