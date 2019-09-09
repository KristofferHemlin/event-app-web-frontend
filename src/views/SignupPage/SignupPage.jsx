import React from 'react';
import './SignupPage.scss'

import TheSignupForm from '../../components/TheSignupForm/TheSignupForm';
import BaseButton from '../../components/BaseButton/BaseButton';
import BackgroundImagePane from '../../components/BackgroundImagePane/BackgroundImagePane';
import background from '../../assets/images/login-bg.png';


import { withRouter } from 'react-router-dom'

const SignupPage = withRouter(({ history }) => (
  <div className="signup-page">
    <div className="signup-content-pane">
      <div className="actions-bar">
        <BaseButton
          size="sm"
          variant="subtle"
          buttonType="frame"
          onClick={() => history.push('/')}
        >Return to login</BaseButton>
      </div>

      <h1>Create your profile</h1>
      <p>Welcome to ”insert name”, fill in the form below to set up your company and user account. </p>

      <TheSignupForm/>

    </div>
  </div>
));

export default SignupPage;
