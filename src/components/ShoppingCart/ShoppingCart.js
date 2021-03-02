import React from 'react';
import { useState, useEffect } from 'react';
import './shoppingCart.css';

const ShoppingCart = ({
  sins,
  quitFromCart,
  addToCart,
  addUnit,
  subtractUnit,
}) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const itemsInCart = [];
    sins.map((sin) => {
      if (sin.inCart === true) {
        itemsInCart.push(sin);
      }
      setCart(itemsInCart);
    });
  }, []);

  return (
    <main className='cart-container'>
      {cart.map((sin, index) => {
        return (
          <div className='sin-in-cart' key={index}>
            <img src={sin.img} alt={`${sin.name}`} className='sin-img' />

            <div className='data-container'>
              <h4
                className='in-cart-name'
                style={{ color: `var(--${sin.name}` }}
              >
                {sin.name}
              </h4>
              <div className='sin-details'>
                <p className='in-cart-data'>{sin.quantity} uds.</p>
                <p className='in-cart-data'>{sin.price} €</p>
                <p className='subtotal'>
                  Subtotal: {sin.quantity * sin.price} €
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default ShoppingCart;
