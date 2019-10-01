import React from 'react';
import './SignupPage.scss'

import TheSignupForm from '../../components/TheSignupForm/TheSignupForm';
import BaseButton from '../../components/BaseButton/BaseButton';
import { Link } from 'react-router-dom'


import { withRouter } from 'react-router-dom'

const SignupPage = withRouter(({ history }) => (
  <div className="signup-page">
    <div className="signup-content-pane">

      <h1>Create your profile</h1>
      <p>Welcome to ”insert name”, fill in the form below to set up your company and user account. </p>

      <TheSignupForm/>
      <Link to="/">Return to login</Link>

    </div>
  </div>
));

export default SignupPage;
