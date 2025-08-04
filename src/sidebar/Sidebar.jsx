import React from 'react';
import Category from './category/Category'
import Colors from './colors/Colors'
import Price from './price/Price'

const Sidebar = ({handleChange, selectedCategory}) => {
  return (
    <div className='fixed top-0 left-0 p-5 space-y-5'>
      <Category selectedCategory={selectedCategory} handleChange={handleChange}/>
      <Price selectedCategory={selectedCategory} handleChange={handleChange}/>
      <Colors selectedCategory={selectedCategory} handleChange={handleChange}/>
    </div>
  );
};

export default Sidebar;