import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTask, deleteTask }) => {
  return (
    <div className="todo-list">
      {todos.map(task => (
        <TodoItem 
          key={task.id} 
          task={task} 
          toggleTask={toggleTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </div>
  );
};

export default TodoList;