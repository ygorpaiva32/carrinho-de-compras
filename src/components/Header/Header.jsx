import React from 'react';
import Search from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton'

import './Header.css'

export default function Header(){
  return (
    <header className='header'>
      <div className="container">
      <Search/>
      <CartButton/>
      </div>
    </header>
  )
}