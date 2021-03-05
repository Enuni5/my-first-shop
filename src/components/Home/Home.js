import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la tienda de los pecados</h1>
      <h2>
        Aquí puedes pagar por los pecados de tus amigos, familiares, o quien tú
        quieras...
      </h2>
      <h2>
        Envíales una nota para que sepan que ya te has encargado tú de su
        depravación
      </h2>
      <div className='shop-link'>
        <Link to='/tienda'>
          <li>Compra ahora</li>
        </Link>
      </div>
    </div>
  );
};

export default Home;
