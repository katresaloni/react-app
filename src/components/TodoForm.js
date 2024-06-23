// import React, { useState } from 'react';

// function TodoForm({ addTodo }) {
//   const [name, setName] = useState('');

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (name === '') return;
//     addTodo(name);
//     setName('');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button type="submit">Add Todo</button>
//     </form>
//   );
// }

// export default TodoForm;


// yes the below code works for me 

import React, { useState } from 'react';
// Ensure you import the styles

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo({
        text: input,
        isCompleted: false,
      });
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Add a new task..."
      />
      <button type="submit" className="add-button">Add Todo</button>
    </form>
  );
};

export default TodoForm;

