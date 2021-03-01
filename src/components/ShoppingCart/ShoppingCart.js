import React from 'react';
import { useState, useEffect } from 'react';
import './shoppingCart.css';

const ShoppingCart = (props) => {
  const [sins, setSins] = useState([]);

  useEffect(() => {
    setSins([...props.sins]);
    console.log(sins);
  }, []);

  function quitFromCart(e) {
    props.quitProduct(e);
  }

  return (
    <div>
      <h1>Hello from ShoppingCart</h1>
      <button onClick={quitFromCart}></button>
    </div>
  );
};

export default ShoppingCart;
