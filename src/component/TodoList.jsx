import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTodos((todo) => {
      return todo.concat({
        text: inputValue,
        id: `${Math.floor(Math.random() * 10)}-${Math.floor(Math.random() * 100)}`,
      });
    });
    
    setInputValue("");
  };
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleRemove = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={inputValue}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add todo</button>

        <ol>
          {todos.map(({text, id}) => (
            <li key={id}>
              <span>{text}</span>
              <button onClick={() => handleRemove(id)}>Remove</button>
            </li>
          ))}
        </ol>
      </form>
    </div>
  );
};

export default TodoList;
