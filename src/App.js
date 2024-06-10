import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(name) {
    setTodos(prevTodos => {
      return [...prevTodos, { id: Math.random(), name: name, complete: false }];
    });
  }

  function toggleTodo(id) {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    });
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <div>
        {todos.filter(todo => !todo.complete).length} left to do
      </div>
    </div>
  );
}

export default App;
