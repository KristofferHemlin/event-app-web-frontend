import React, { useState, useEffect } from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import { withRouter } from 'react-router-dom'
import FullScreenSpinner from '../FullScreenSpinner/FullScreenSpinner';
import axios from 'axios';

const RouteChangeListener = withRouter(({ history, location, children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [{ isLoggedIn },dispatch] = useStateValue();

  const logOut = () => {
    localStorage.clear();
    delete axios.defaults.headers.common["Authorization"];
    dispatch({
      type: 'ClearState',
    });
    history.push('/login');
  }


  const onRouteChange = () => {

    const token = localStorage.getItem('userToken');
    /*
      1. Check if there is any localStorage token. If not, send to login.
      2. Take token and decode it, to check if it is still valid.
      3. If token is not valid, attempt to use the refresh token to extend the session.
      4. ... If that is not possible send them to login.
      5. If token was valid och successfully refreshed. Set token as axios Authorization header.
      6. ... and set global "isLoggedIn" state as true.
      7. ( Do not redirect them to dashboard as the router will handle that automagicly. )
    */
    if (token){
      axios.defaults.headers.common['Authorization'] = token;
      dispatch({
        type: 'ChangeLoginStatus',
        newStatus: true
      })
      axios.get(process.env.REACT_APP_API_URL + '/users/me')
      .then(res => {
        setIsLoading(false);
        dispatch({
          type: 'UpdateUserInformation',
          newUserInfo: { ...res.data },
        })
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      })
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(location)
    switch(location.pathname){
      case '/logout':
        logOut();
        break;
      default:
        onRouteChange();
    }
  }, [location.pathname]);

  return (
    <div className="route-change-listener">
      { isLoading ? <FullScreenSpinner/> : children }
    </div>
  );

});

export default RouteChangeListener;
