import React from 'react';
import { useState, useEffect } from 'react';
import './shoppingCart.css';
import { Link } from 'react-router-dom';

const ShoppingCart = ({
  sins,
  quitFromCart,
  addUnitCart,
  subtractUnitCart,
}) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const itemsInCart = [];
    sins.map((sin) => {
      if (sin.inCart === true) {
        itemsInCart.push(sin);
      }
      setCart(itemsInCart);
      return sins;
    });
  }, [sins]);

  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    let uds;
    let subT = 0;
    let tax = 0;
    let total = 0;
    let render = false;

    if (cart.length > 0) {
      uds = cart.reduce((a, b) => {
        return { quantity: a.quantity + b.quantity };
      });
      let sinSubT = [];
      sinSubT = cart.map((sin) => {
        return sin.quantity * sin.price;
      });

      subT = sinSubT.reduce((a, b) => a + b) / 1.21;
      tax = subT * 0.21;
      total = (subT + tax).toFixed(2);
      if (uds.quantity > 0) {
        render = true;
      }
      const newTicket = [uds.quantity, subT, tax, total, render];

      setTicket(newTicket);
    }
  }, [cart, sins]);

  return (
    <main className='cart-container'>
      {!ticket[4] && (
        <div className='empty-cart'>
          {' '}
          Tu carrito está vacío, ve a la <Link to='/tienda'>TIENDA</Link> y
          añade algún pecado
        </div>
      )}
      {ticket[4] && (
        <div className='ticket-container'>
          <h3 className='ticket-title'>TICKET</h3>
          <div className='ticket-details'>
            <p>Unidades en carrito: </p>
            <p>{ticket[0]} uds.</p>
          </div>
          <div className='ticket-details'>
            <p>Subtotal:</p>
            <p>{Math.round((ticket[1] + Number.EPSILON) * 100) / 100} €</p>
          </div>
          <div className='ticket-details'>
            <p>Impuestos (21%):</p>
            <p>{Math.round((ticket[2] + Number.EPSILON) * 100) / 100} €</p>
          </div>
          <div className='ticket-details'>
            <p>Total ticket: </p>
            <p>{ticket[3]} €</p>
          </div>
        </div>
      )}
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
            <div className='cart-buttons'>
              <button
                className='add'
                name={sin.name}
                onClick={(e) => addUnitCart(e)}
              >
                +
              </button>
              <button
                className='subtract'
                name={sin.name}
                onClick={(e) => subtractUnitCart(e)}
              >
                -
              </button>
              <button
                className='quit'
                name={sin.name}
                onClick={(e) => quitFromCart(e)}
              >
                X
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default ShoppingCart;
