import TodoItem from './TodoItem';


const TodoList = ({ todos, deleteTodo }) => { 
  return (
    <div className="todo-list">
      {todos.map(task => (
        <TodoItem 
          key={task.id} 
          task={task} 
          deleteTodo={deleteTodo} 
        />
      ))}
    </div>
  );
};

export default TodoList;