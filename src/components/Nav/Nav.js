import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = ({ sins }) => {
  let uds = sins.reduce((a, b) => {
    return { quantity: a.quantity + b.quantity };
  });

  return (
    <nav>
      <h1>Paga por sus Pecados</h1>
      <ul className='nav-links'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/tienda'>
          <li>Tienda</li>
        </Link>
        <Link to='/carrito'>
          <li>Carrito ({uds.quantity})</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
