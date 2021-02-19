import React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  component: any;
  isLogged: boolean;
  loading: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props: PrivateRouteProps) => {
  const {
    component: Component, isLogged, ...rest
  } = props;

  return (
    <Route
      {...rest}
      render={(routeProps) => (isLogged ? (
        <Component {...routeProps} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: routeProps.location },
          }}
        />
      ))}
    />
  );
};

export default PrivateRoute;
