import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, restricted, isLoggedIn, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      isLoggedIn && restricted ?
          <Redirect to="/dashboard" />
      : <Component {...props} />
    )} />
  )
};

export default PublicRoute;
