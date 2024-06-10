import React from 'react';

function TodoItem({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
      {todo.name}
    </div>
  );
}

export default TodoItem;
