// import React, { useState } from 'react';
// import TodoForm from './components/TodoForm.js';
// import TodoList from './components/TodoList.js';

// function App() {
//     const [todos, setTodos] = useState([]);

//     const addTodo = (todo) => {
//         setTodos([ ...todos, todo ]);
//     };

//     const toggleComplete = (index) => {
//         const newTodos = [...todos];
//         newTodos[index].completed = !newTodos[index].completed;
//         setTodos(newTodos);
//     };

//     const removeTodo = (index) => {
//       const newTodos = [...todos];
//       newTodos.splice(index, 1);
//       setTodos(newTodos);
//   };
//     return (
//         <div className="App">
//             <h1>Todo <span> List</span></h1>
//             <TodoForm addTodo={addTodo} />
//             <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
//         </div>
//     );
// }

// export default App;



// App.js

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   const addTodo = () => {
//     setTodos([...todos, { text: newTodo, completed: false }]);
//     setNewTodo('');
//   };

//   const toggleTodo = index => {
//     const newTodos = [...todos];
//     newTodos[index].completed = !newTodos[index].completed;
//     setTodos(newTodos);
//   };

//   return (
//     <div className="app">
//       <div className="todo-list">
//         <input
//           type="text"
//           className="todo-input"
//           value={newTodo}
//           onChange={e => setNewTodo(e.target.value)}
//         />
//         <button className="todo-button" onClick={addTodo}>Add Todo</button>
//         {todos.map((todo, index) => (
//           <div
//             key={index}
//             className={`todo-item ${todo.completed ? 'completed' : ''}`}
//             onClick={() => toggleTodo(index)}
//           >
//             {todo.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;









// write code is from here


// App.js

import React, { useState } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const addTodo = () => {
    if (!isEditing) {
      setTodos([...todos, { text: newTodo, completed: false }]);
    } else {
      updateTodo();
    }
    setNewTodo('');
    setIsEditing(false);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = index => {
    setNewTodo(todos[index].text);
    setIsEditing(true);
    setCurrentTodo({ ...todos[index], index });
  };

  const updateTodo = () => {
    const newTodos = [...todos];
    newTodos[currentTodo.index] = { ...currentTodo, text: newTodo };
    setTodos(newTodos);
  };

  const toggleTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="app">
         <h1 className="heading">My Todo App</h1>
      <div className="todo-list">
        <input
          type="text"
          className="todo-input"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button className="todo-button" onClick={addTodo}>
          {isEditing ? 'Update Todo' : 'Add Todo'}
        </button>
        {todos.map((todo, index) => (
          <div
            key={index}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            <span onClick={() => toggleTodo(index)}>
              {todo.text}
            </span>
            <div>
              <button className="edit-button" onClick={() => editTodo(index)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => deleteTodo(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
