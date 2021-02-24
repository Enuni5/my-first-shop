import React from 'react';
import { useState } from 'react';
import ShoppingCart from '../ShoppinCart/ShoppingCart';
import gluttony from './img/7_sins__gluttony_by_j_witless_dc2ypjf.jpg';
import greed from './img/7_sins__greed_by_j_witless_dc0hpsz.jpg';
import pride from './img/7_sins__pride_by_j_witless_dbjxlt8.jpg';
import envy from './img/envy_by_j_witless_dbnlzjm.jpg';
import lust from './img/lust_by_j_witless_dbrdwxe.jpg';
import sloth from './img/sloth_by_j_witless_dblmbur.jpg';
import wrath from './img/wrath_by_j_witless_dbw19jn.jpg';
import './shop.css';

const Shop = () => {
  const [sins, setSins] = useState([
    {
      name: 'Soberbia',
      img: pride,
      description: 'blablabla',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Ira',
      img: wrath,
      description: 'blablabla',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Avaricia',
      img: greed,
      description: 'blablabla',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Envidia',
      img: envy,
      description: 'blablabla',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Lujuria',
      img: lust,
      description: 'blablabla',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Gula',
      img: gluttony,
      description: 'blablabla',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Pereza',
      img: sloth,
      description: 'blablabla',
      price: 0,
      inCart: false,
      quantity: 0,
    },
  ]);

  function addToCart(e) {
    sins.map((sin, index) => {
      if (sin.name === e.target.name) {
        let sinToCart = [...sins];
        sinToCart[index].inCart = true;
        setSins(sinToCart);
      }
      return sins;
    });
    console.log(sins);
  }

  function quitFromCart(e) {
    sins.map((sin, index) => {
      if (sin.name === e.target.name) {
        let sinToQuit = [...sins];
        sinToQuit[index].inCart = false;
        setSins(sinToQuit);
      }
      return sins;
    });
    console.log(sins);
  }

  function addUnit(e) {
    sins.map((sin, index) => {
      if (sin.name === e.target.name) {
        let sinToAdd = [...sins];
        sinToAdd[index].quantity++;
        setSins(sinToAdd);
      }
      return sins;
    });
  }

  function subtractUnit(e) {
    sins.map((sin, index) => {
      if (sin.name === e.target.name && sin.quantity > 0) {
        let sinToSubtract = [...sins];
        sinToSubtract[index].quantity--;
        setSins(sinToSubtract);
      }
      return sins;
    });
  }

  return (
    <div className='page-container'>
      <div className='shopping-cart'>
        {' '}
        <ShoppingCart
          quitFromCart={quitFromCart}
          addUnit={addUnit}
          subtractUnit={subtractUnit}
        />
      </div>

      {sins.map((sin, index) => {
        return (
          <div key={index} className={`${sin.name} sin-container`}>
            <img className='sin-img' src={sin.img} alt={sin.name} />
            <p className={`#${sin.name} sin-name`}>{sin.name}</p>
            <p className='sin-description'>{sin.description}</p>
            <p className='sin-price'>{sin.price}€</p>

            <div className='buttons-container'>
              <p className='sin-quantity'>{sin.quantity}</p>
              <button className='buttons' name={sin.name} onClick={addUnit}>
                +
              </button>
              <button className='buttons' name={sin.name} onClick={addToCart}>
                AddToCart
              </button>
              <button
                className='buttons'
                name={sin.name}
                onClick={subtractUnit}
              >
                -
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
