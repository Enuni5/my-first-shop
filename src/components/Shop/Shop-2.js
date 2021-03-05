import React from 'react';
// import { useState } from 'react';
import './shop-2.css';
import Basket from './shopping-basket.svg';

const Shop = ({ addToCart, subtractUnit, addUnit, sins, errors }) => {
  return (
    <main className='sin-carousel'>
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
              <h3
                className='sin-name'
                style={{ textShadow: `0px 0px 5px var(--${sin.name})` }}
              >
                {sin.name}
              </h3>
              <div className='sin-info'>
                <div className='sin-label'>
                  <p className='sin-description'>{sin.description}</p>
                  <p className='sin-price'>{sin.price}€</p>
                </div>
                <div className='sin-buttons'>
                  {errors[0] && <p className='errors'>{errors[1]}</p>}
                  <div className='actual-buttons'>
                    <div className='quantity'>
                      <button
                        className='buttons'
                        name={sin.name}
                        onClick={(e) => subtractUnit(e)}
                      >
                        -
                      </button>
                      <p className='sin-quantity'>{sin.unitsToAdd}</p>
                      <button
                        className='buttons'
                        name={sin.name}
                        onClick={(e) => addUnit(e)}
                      >
                        +
                      </button>
                    </div>
                    <img
                      src={Basket}
                      alt='añadir a carrito'
                      className='buttons add-to-cart'
                      name={sin.name}
                      onClick={(e) => addToCart(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Shop;
