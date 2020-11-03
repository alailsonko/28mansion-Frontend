import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../pages/Home';
import Login from '../pages/Login';
import configureStore from '../store';

const store = configureStore();

function Routes() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </BrowserRouter>
    </Provider>

  );
}

export default Routes;
