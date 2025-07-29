import React from 'react';
import Category from './category/Category'
import Colors from './colors/Colors'
import Price from './price/Price'

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 p-5'>
      <Category />
      <Colors />
      <Price />
    </div>
  );
};

export default Sidebar;