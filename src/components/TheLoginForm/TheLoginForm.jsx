import React, { useState, useEffect } from 'react';

import TextInput from '../../components/TextInput/TextInput';
import BaseButton from '../../components/BaseButton/BaseButton';

// Sets up the input field data.
const formFields = [
  {
    key: 'accountName',
    type: 'text',
    variant: 'login-special',
    placeholder: 'Account Name'
  },
  {
    key: 'accountPassword',
    type: 'password',
    variant: 'login-special',
    placeholder: 'Password'
  }
];

const TheLoginForm = () => {

  let [isLoginDisabled, setIsLoginDisabled] = useState(true);
  let [accountName, setAccountName] = useState('');
  let [password, setPassword] = useState('');

  return (
    <div className="the-login-form">
      {formFields.map(input => (
        <TextInput
          key={input.key}
          type={input.type}
          variant={input.variant}
          placeholder={input.placeholder}
        />
      ))}
      <div className="actions-bar">
        <BaseButton
          size="full"
          variant="primary"
          buttonType="filled"
          disabled={isLoginDisabled}
        >
          Login
        </BaseButton>
      </div>
    </div>
  );
};

export default TheLoginForm;
