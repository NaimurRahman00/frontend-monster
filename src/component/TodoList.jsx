import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  }

  const handleChange = e => {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' value={inputValue} placeholder='Enter a new todo'></input>
        <button type='submit'>Add todo</button>

        <ol>
          {todos.map((todo, i) => <li key={i}>{todo}</li>)}
        </ol>
      </form>
    </div>
  );
};

export default TodoList;