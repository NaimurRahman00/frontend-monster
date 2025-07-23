import React, { useState } from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !quantity) return;

    const newItem = {
      name,
      quantity: parseInt(quantity)
    };

    setItems([...items, newItem]);
    setName('');
    setQuantity('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter product name' />
        <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='Enter product Quantity' />
        <button>Add</button>
      </form>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item, i) => <li key={i}>{item.name} - quantity: {item.quantity}</li>)}
      </ul>
    </div>
  );
};

export default ShoppingList;