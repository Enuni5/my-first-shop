import React from 'react';
import { useState, useEffect } from 'react';
import './shoppingCart.css';

const ShoppingCart = ({ sins, quitProduct }) => {
  function quitFromCart(e) {
    // props.quitProduct(e);
    console.log(sins, quitProduct);
  }

  return (
    <div>
      <h1>Hello from ShoppingCart</h1>
      <button onClick={quitFromCart}></button>
    </div>
  );
};

export default ShoppingCart;
