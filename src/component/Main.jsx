import React, { useEffect, useState } from 'react';

const Main = () => {
  const funcName = () => {
    const savedName = localStorage.getItem('name');
    return savedName ? JSON.parse(savedName) : '';
  }

  const [name, setName] = useState(funcName)

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const handleClear = ()=> setName('');

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name])

  return (
    <div>
      <h1>Your Name: {name}</h1>
      <input
        type='text'
        value={name}
        onChange={handleChange}
        placeholder='Enter your name'
      ></input>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Main;