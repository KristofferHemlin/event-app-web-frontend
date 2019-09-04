import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useStateValue } from '../../components/StateProvider/StateProvider';

const PublicRoute = ({component: Component, restricted, ...rest}) => {

  const [{ user }, dispatch] = useStateValue();

  return (
    <Route {...rest} render={props => (
      user.isLoggedIn && restricted ?
          <Redirect to="/dashboard" />
      : <Component {...props} />
    )} />
  )
};

export default PublicRoute;
