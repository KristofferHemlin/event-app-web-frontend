import React from 'react';
import './LoginPage.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BaseButton from '../../components/BaseButton/BaseButton';
import TheLoginForm from '../../components/TheLoginForm/TheLoginForm';
import { withRouter, Link } from 'react-router-dom'

const LoginPage = withRouter(({ history }) => {

  return (
    <div className="login-page">
      <div className="login-content">
        <h1>EVENT APP</h1>
        <TheLoginForm/>
        <Link to="/forgotten-password">Forgotten your password?</Link>
      </div>
    </div>
  )
})

export default LoginPage;
