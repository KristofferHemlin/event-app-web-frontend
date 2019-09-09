import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import PublicRoute from '../../components/PublicRoute/PublicRoute';
import BackgroundImagePane from '../../components/BackgroundImagePane/BackgroundImagePane';
import background from '../../assets/images/login-bg.png';
import './LoginInterface.scss'

// Pages
import LoginPage from '../../views/LoginPage/LoginPage';
import SignupPage from '../../views/SignupPage/SignupPage';
import ForgottenPassword from '../../views/ForgottenPassword/ForgottenPassword';

const LoginInterface = () => {
  return (
    <div className="login-interface">
      <BackgroundImagePane
        backgroundImage={background}
      >

        <PublicRoute
          path="/login"
          component={LoginPage}>
        </PublicRoute>

        <PublicRoute
          path="/signup"
          component={SignupPage}>
        </PublicRoute>


      </BackgroundImagePane>
    </div>
  );
};

export default LoginInterface;
