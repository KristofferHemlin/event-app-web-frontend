import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useStateValue } from '../../components/StateProvider/StateProvider';

const PrivateRoute = ({component: Component, ...rest}) => {

  const [{ isLoggedIn }, dispatch] = useStateValue();

  return (
    <Route {...rest} render={props => (
      isLoggedIn ?
          <Component {...props} />
      : <Redirect to="/" />
    )} />
  )
};

export default PrivateRoute;
