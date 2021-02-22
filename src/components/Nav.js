import React from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.css';

const Nav = () => {
  return (
    <nav>
      <h1>MiTienda</h1>
      <ul className='nav-links'>
        <Link to='/home'>
          <li>Inicio</li>
        </Link>
        <Link to='/shop'>
          <li>Tienda</li>
        </Link>
        <Link to='/shoppingcart'>
          <li>Carrito</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
