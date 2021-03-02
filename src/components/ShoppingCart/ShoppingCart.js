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
    <div>
      {cart.map((sin, index) => {
        return <div key={index}>{sin.name}</div>;
      })}
    </div>
  );
};

export default ShoppingCart;
