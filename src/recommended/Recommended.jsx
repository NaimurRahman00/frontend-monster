import React from 'react';

const Recommended = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl mb-2'>Recommended</h1>
      <div className='flex justify-start gap-2 mb-8 *:px-5 *:py-1 *:border *:border-black/50'>
        <button>All products</button>
        <button>Nike</button>
        <button>Adidas</button>
        <button>Puma</button>
        <button>Vans</button>
      </div>
    </div>
  );
};

export default Recommended;