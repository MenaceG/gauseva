import React from 'react';
import './styles/SearchBox.scss';

const SearchBox = () => {
  return (
    <div className='search-container'>
      <input type='text' placeholder='your keyWord' className='search-inputs' />
      <button className='search-btn'>Search</button>
    </div>
  );
};

export default SearchBox;
