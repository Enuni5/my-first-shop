// import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '/Users/Emilio/projects/my-first-shop/src/components/Home/Home.js';

import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Nav from '../Nav/Nav';
import Shop from '../Shop/Shop-2';
import About from '../About/About';
import gluttony from './img/7_sins__gluttony_by_j_witless_dc2ypjf.jpg';
import greed from './img/7_sins__greed_by_j_witless_dc0hpsz.jpg';
import pride from './img/7_sins__pride_by_j_witless_dbjxlt8.jpg';
import envy from './img/envy_by_j_witless_dbnlzjm.jpg';
import lust from './img/lust_by_j_witless_dbrdwxe.jpg';
import sloth from './img/sloth_by_j_witless_dblmbur.jpg';
import wrath from './img/wrath_by_j_witless_dbw19jn.jpg';

import { useState } from 'react';

const Routes = () => {
  const [sins, setSins] = useState([
    {
      name: 'Soberbia',
      img: pride,
      description: 'Soy mejor que tú',
      price: 5,
      inCart: false,
      quantity: 0,
      unitsToAdd: 0,
    },
    {
      name: 'Ira',
      img: wrath,
      description: 'Me sacas de mis casillas',
      price: 5,
      inCart: false,
      quantity: 0,
      unitsToAdd: 0,
    },
    {
      name: 'Avaricia',
      img: greed,
      description: 'Todo será mío',
      price: 5,
      inCart: false,
      quantity: 0,
      unitsToAdd: 0,
    },
    {
      name: 'Envidia',
      img: envy,
      description: 'Míralo, qué se creerá...',
      price: 5,
      inCart: false,
      quantity: 0,
      unitsToAdd: 0,
    },
    {
      name: 'Lujuria',
      img: lust,
      description: '¿Quiéres venir a probar un poco?',
      price: 5,
      inCart: false,
      quantity: 0,
      unitsToAdd: 0,
    },
    {
      name: 'Gula',
      img: gluttony,
      description: 'Mmmm... Qué ricooo',
      price: 5,
      inCart: false,
      quantity: 0,
      unitsToAdd: 0,
    },
    {
      name: 'Pereza',
      img: sloth,
      description: 'Paso de pensar algo...',
      price: 5,
      inCart: false,
      quantity: 0,
      unitsToAdd: 0,
    },
  ]);

  const [errors, setErrors] = useState([true, '']);

  function addToCart(e) {
    sins.map((sin, index) => {
      if (sin.name === e.target.name) {
        if (sin.unitsToAdd === 0) {
          messageHandling('Añade al menos 1 unidad');
        }
        if (sin.unitsToAdd > 0) {
          messageHandling('Añadido al carrito');
        }
        let sinToCart = [...sins];
        sinToCart[index].inCart = true;
        sinToCart[index].quantity =
          sinToCart[index].quantity + sinToCart[index].unitsToAdd;
        sinToCart[index].unitsToAdd = 0;
        setSins(sinToCart);
      }
      return sins;
    });
  }

  function messageHandling(text) {
    setErrors([true, text]);
    setTimeout(() => {
      setErrors([false, '']);
    }, 3500);
  }

  function quitFromCart(e) {
    sins.map((sin, index) => {
      if (sin.name === e.target.name) {
        let sinToQuit = [...sins];
        sinToQuit[index].inCart = false;
        sinToQuit[index].quantity = 0;
        setSins(sinToQuit);
      }
      return sins;
    });
  }

  function addUnit(e) {
    sins.map((sin, index) => {
      if (sin.name === e.target.name) {
        let sinToAdd = [...sins];
        sinToAdd[index].unitsToAdd++;
        setSins(sinToAdd);
      }
      return sins;
    });
  }

  function subtractUnit(e) {
    sins.map((sin, index) => {
      if (sin.name === e.target.name && sin.unitsToAdd > 0) {
        let sinToSubtract = [...sins];
        sinToSubtract[index].unitsToAdd--;
        setSins(sinToSubtract);
      }
      return sins;
    });
  }

  function addUnitCart(e) {
    sins.map((sin, index) => {
      if (sin.name === e.target.name) {
        let sinToAdd = [...sins];
        sinToAdd[index].quantity++;
        setSins(sinToAdd);
      }
      return sins;
    });
  }

  function subtractUnitCart(e) {
    sins.map((sin, index) => {
      if (sin.name === e.target.name && sin.quantity > 0) {
        let sinToSubtract = [...sins];
        sinToSubtract[index].quantity--;
        setSins(sinToSubtract);
      }
      if (sin.quantity === 0) {
        let sinOutOfCart = [...sins];
        sinOutOfCart[index].inCart = false;
        setSins(sinOutOfCart);
      }
      return sins;
    });
  }

  return (
    <BrowserRouter>
      <Nav sins={sins} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/tienda'
          render={(props) => (
            <Shop
              {...props}
              sins={sins}
              errors={errors}
              addToCart={addToCart}
              addUnit={addUnit}
              subtractUnit={subtractUnit}
            />
          )}
        />
        <Route
          exact
          path='/carrito'
          render={(props) => (
            <ShoppingCart
              {...props}
              sins={sins}
              quitFromCart={quitFromCart}
              addUnitCart={addUnitCart}
              subtractUnitCart={subtractUnitCart}
            />
          )}
        />
        <Route exact path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
