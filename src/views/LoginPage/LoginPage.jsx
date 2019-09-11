import React from 'react';
import './LoginPage.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BaseButton from '../../components/BaseButton/BaseButton';
import BackgroundImagePane from '../../components/BackgroundImagePane/BackgroundImagePane';
import TheLoginForm from '../../components/TheLoginForm/TheLoginForm';
import background from '../../assets/images/login-bg.png';
import { withRouter, Link } from 'react-router-dom'

const LoginPage = withRouter(({ history }) => {

  return (
    <div className="login-page">
      <div className="login-content">
        <h1>EVENT APP</h1>
        <TheLoginForm/>
        <Link to="/forgotten-password">Forgotten your password?</Link>
        <div className="login-footer">
          <BaseButton
            size="md"
            variant="subtle"
            buttonType="frame"
            onClick={() => history.push('/signup')}
          >
            <FontAwesomeIcon icon="user-edit" />
            <span>Dont have an account yet? Click here to sign up!</span>
          </BaseButton>
        </div>
      </div>
    </div>
  )
})

export default LoginPage;
