import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <nav>
      <h1>La tienda de los Pecados</h1>
      <ul className='nav-links'>
        <Link to='/home'>
          <li>Home</li>
        </Link>
        <Link to='/shop'>
          <li>Tienda</li>
        </Link>
        <Link to='/shoppingcart'>
          <li>Carrito</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
