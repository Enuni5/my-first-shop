import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import ShoppingCart from './ShoppinCart/ShoppingCart';
import Nav from './Nav/Nav';
import Shop from './Shop/Shop';

const Routes = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/shoppingcart' component={ShoppingCart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
