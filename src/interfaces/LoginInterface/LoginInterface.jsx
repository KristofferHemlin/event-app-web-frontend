import React from 'react';
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

        <PublicRoute
          path="/forgotten-password"
          component={ForgottenPassword}>
        </PublicRoute>

      </BackgroundImagePane>
    </div>
  );
};

export default LoginInterface;
