import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import Nav from './Nav';
import Shop from './Shop';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Nav} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/shoppingcart' component={ShoppingCart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
