import React from 'react';

function TodoItem({ todo, index, toggleComplete, removeTodo }) {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
            {todo.text}
            {/* <button onclick={() => toggleComplete(index)}>Complete</button> */}
            <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
    );
}

export default TodoItem;
