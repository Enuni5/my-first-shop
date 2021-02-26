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
import { ReactComponent as Basket } from './img/shopping-basket.svg';
import './shop-2.css';

const Shop = () => {
  const [sins, setSins] = useState([
    {
      name: 'Soberbia',
      img: pride,
      description: 'Puedes pagarlo con un espejo',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Ira',
      img: wrath,
      description: 'Puedes pagarlo con una paliza',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Avaricia',
      img: greed,
      description: 'Nunca lo pagarías, mejor quedarte con tu dólar',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Envidia',
      img: envy,
      description: 'Puedes seguir quedandote mirándolo sin comprarlo',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Lujuria',
      img: lust,
      description: 'Te gustaría rozarte con el tipo de aquí arriba, eeeh?',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Gula',
      img: gluttony,
      description: 'También puedes pagarlo con un jamón serrano',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Pereza',
      img: sloth,
      description: 'Paso de pensar algo...',
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
    <div class='sin-carousel'>
      {sins.map((sin, index) => {
        return (
          <div
            key={index}
            className='sin-tile'
            style={{ backgroundImage: `url(${sin.img})` }}
          >
            <div
              className='sin-text-container'
              style={{
                background: `linear-gradient(to top, var(--${sin.name}) 5%,rgba(255, 255, 255, 0))`,
              }}
            >
              <div
                className='sin-name'
                style={{ textShadow: `0px 0px 5px var(--${sin.name})` }}
              >
                {sin.name}
              </div>
              <div className='sin-info'>
                <div className='sin-label'>
                  <div className='sin-description'>{sin.description}</div>
                  <div className='sin-price'>{sin.price}€</div>
                </div>
                <div className='sin-buttons'>
                  <div className='actual-buttons'>
                    <div className='quantity'>
                      <button
                        className='buttons'
                        name={sin.name}
                        onClick={subtractUnit}
                      >
                        -
                      </button>
                      <p className='sin-quantity'>{sin.quantity}</p>
                      <button
                        className='buttons'
                        name={sin.name}
                        onClick={addUnit}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className='buttons add-to-cart'
                      name={sin.name}
                      onClick={addToCart}
                    >
                      <Basket className='basket' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
