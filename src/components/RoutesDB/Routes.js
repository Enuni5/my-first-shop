import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Nav from '../Nav/Nav';
import Shop from '../Shop/Shop-2';
import About from '../About/about';
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
      description: 'Puedes pagarlo con un espejo',
      price: 5,
      inCart: false,
      quantity: 0,
      uta: 0,
    },
    {
      name: 'Ira',
      img: wrath,
      description: 'Puedes pagarlo con una paliza',
      price: 5,
      inCart: false,
      quantity: 0,
      uta: 0,
    },
    {
      name: 'Avaricia',
      img: greed,
      description: 'Nunca lo pagarías, mejor quedarte con tu dólar',
      price: 5,
      inCart: false,
      quantity: 0,
      uta: 0,
    },
    {
      name: 'Envidia',
      img: envy,
      description: 'Puedes seguir quedandote mirándolo sin comprarlo',
      price: 5,
      inCart: false,
      quantity: 0,
      uta: 0,
    },
    {
      name: 'Lujuria',
      img: lust,
      description: 'Te gustaría rozarte con el tipo de aquí arriba, eeeh?',
      price: 5,
      inCart: false,
      quantity: 0,
      uta: 0,
    },
    {
      name: 'Gula',
      img: gluttony,
      description: 'También puedes pagarlo con un jamón serrano',
      price: 5,
      inCart: false,
      quantity: 0,
      uta: 0,
    },
    {
      name: 'Pereza',
      img: sloth,
      description: 'Paso de pensar algo...',
      price: 5,
      inCart: false,
      quantity: 0,
      uta: 0,
    },
  ]);

  function addToCart(e) {
    sins.map((sin, index) => {
      if (sin.name === e.target.name) {
        let sinToCart = [...sins];
        sinToCart[index].inCart = true;
        sinToCart[index].quantity = sinToCart[index].uta;
        sinToCart[index].uta = 0;
        setSins(sinToCart);
      }
      return sins;
    });
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
        sinToAdd[index].uta++;
        setSins(sinToAdd);
      }
      return sins;
    });
  }

  function subtractUnit(e) {
    sins.map((sin, index) => {
      if (sin.name === e.target.name && sin.quantity > 0) {
        let sinToSubtract = [...sins];
        sinToSubtract[index].uta--;
        setSins(sinToSubtract);
      }
      return sins;
    });
  }
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/shop'
          render={(props) => (
            <Shop
              {...props}
              sins={sins}
              addToCart={addToCart}
              addUnit={addUnit}
              subtractUnit={subtractUnit}
            />
          )}
          sins={sins}
        />
        <Route
          exact
          path='/shoppingcart'
          render={(props) => (
            <ShoppingCart
              {...props}
              sins={sins}
              quitProduct={quitFromCart}
              addToCart={addToCart}
              addUnit={addUnit}
              subtractUnit={subtractUnit}
            />
          )}
        />
        <Route exact path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
