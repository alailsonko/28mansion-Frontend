import React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom';

interface AuthRouteProps extends RouteProps {
  component: any;
  isLogged: boolean;
  loading: boolean;
}

const AuthRoute: React.FC<AuthRouteProps> = (props: AuthRouteProps) => {
  const {
    component: Component, isLogged, ...rest
  } = props;

  return (
    <Route
      {...rest}
      render={(routeProps) => (!isLogged ? (
        <Component {...routeProps} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: routeProps.location },
          }}
        />
      ))}
    />
  );
};

export default AuthRoute;
