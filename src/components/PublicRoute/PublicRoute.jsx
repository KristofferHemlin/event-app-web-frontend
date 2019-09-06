import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useStateValue } from '../../components/StateProvider/StateProvider';

const PublicRoute = ({component: Component, restricted, ...rest}) => {

  const [{ isLoggedIn }, dispatch] = useStateValue();

  return (
    <Route {...rest} render={props => (
      isLoggedIn && restricted ?
          <Redirect to="/dashboard" />
      : <Component {...props} />
    )} />
  )
};

export default PublicRoute;
