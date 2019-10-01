import React from 'react';
import './ForgottenPassword.scss';

import BaseButton from '../../components/BaseButton/BaseButton';
import TextInput from '../../components/TextInput/TextInput';
import { Link } from 'react-router-dom'

const ForgottenPassword = () => {
  return (
    <div className="forgotten-password-page">
      <div className="content-pane">
        <h3>Forgotten your password?</h3>
        <p>Please type your account email and we will send you a recovery email link.</p>
        <TextInput
          label="Account Email"
        ></TextInput>
        <BaseButton
          size="full"
          variant="primary"
          type="filled"
        >Send</BaseButton>
      <Link to="/">Return to login</Link>
      </div>
    </div>
  );
};

export default ForgottenPassword;
