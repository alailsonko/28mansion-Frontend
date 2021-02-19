import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import { Store } from '../store';

function Routes() {
  const isLogged = useSelector((state: Store) => state.signin.isLogged);
  const loading = useSelector((state: Store) => state.signin.loading);

  return (
    <BrowserRouter>
      <PrivateRoute path="/" exact loading={loading} isLogged={isLogged} component={Home} />
      <AuthRoute path="/login" exact loading={loading} isLogged={isLogged} component={Login} />
      <AuthRoute path="/register" exact loading={loading} isLogged={isLogged} component={Register} />
    </BrowserRouter>

  );
}

export default connect()(Routes);
