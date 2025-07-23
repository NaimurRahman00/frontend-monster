import React from 'react';
const initialState = {count: 0};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count + 1}
    case 'incrementByAmount':
      return {count: state.count + 1}
    case 'decrementByAmount':
      return {count: state.count + 1}
  
    default:
      break;
  }
}

const CounterReducer = () => {
  return (
    <div>
      
    </div>
  );
};

export default CounterReducer;