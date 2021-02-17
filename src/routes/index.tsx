import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import configureStore from '../store';

const { store, persistor }: any = configureStore();

function Routes() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </BrowserRouter>
      </PersistGate>
    </Provider>

  );
}

export default Routes;
