import React, { useReducer, useState } from 'react';
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'incrementByAmount':
      return { count: state.count + action.payload }
    case 'decrementByAmount':
      return { count: state.count - action.payload }
    default: action.state;
      break;
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = ()=> dispatch({type: 'increment'});
  const handleDecrement = ()=> dispatch({type: 'decrement'});

  const handleIncrementByAmount = ()=> {
    dispatch({type: 'incrementByAmount', payload: +inputValue});
    setInputValue(0);
  }
  const handleDecrementByAmount = ()=> {
    dispatch({type: 'decrementByAmount', payload: +inputValue});
    setInputValue(0);
  }

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br/>
      <input type='number' value={inputValue} onChange={e => setInputValue(e.target.value)}/>
      <button onClick={handleIncrementByAmount}>Increment by Amount</button>
      <button onClick={handleDecrementByAmount}>Decrement by Amount</button>
    </div>
  );
};

export default CounterReducer;