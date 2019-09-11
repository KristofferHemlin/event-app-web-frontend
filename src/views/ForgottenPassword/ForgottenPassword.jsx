import React from 'react';
import './ForgottenPassword.scss';

import BaseButton from '../../components/BaseButton/BaseButton';
import TextInput from '../../components/TextInput/TextInput';

const ForgottenPassword = () => {
  return (
    <div className="forgotten-password-page">
      <div className="content-pane">
        <h3>Forgotten your password?</h3>
        <TextInput></TextInput>
      </div>
    </div>
  );
};

export default ForgottenPassword;
