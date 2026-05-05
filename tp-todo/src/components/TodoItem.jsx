const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="todo-item" style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
      <span 
        onClick={() => toggleTask(task.id)}
        style={{ 
          textDecoration: task.completed ? 'line-through' : 'none', 
          cursor: 'pointer',
          flexGrow: 1 
        }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </div>
  );
};

export default TodoItem;