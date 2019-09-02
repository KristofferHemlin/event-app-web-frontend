import React, { useState, useEffect } from 'react';

import TextInput from '../../components/TextInput/TextInput';
import BaseButton from '../../components/BaseButton/BaseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import axios from 'axios';

const TheLoginForm = () => {

  let [isLoginDisabled, setIsLoginDisabled] = useState(true);
  let [isLoading, setIsLoading] = useState(false);

  // Sets up the form-fields data.
  let [fields, setFields] = useState([
    {
      key: 'accountName',
      type: 'text',
      variant: 'login-special',
      placeholder: 'Account Name',
      value: '',

    },
    {
      key: 'accountPassword',
      type: 'password',
      variant: 'login-special',
      placeholder: 'Password',
      value: '',
    }
  ]);

  let handleInputChange = (event, i) => {
    let values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
    if(fields.every(field => field.value.length !== 0)){
      setIsLoginDisabled(false);
    } else {
      setIsLoginDisabled(true);
    }
  };

  let handleButtonClick = () => {
    // TODO: Start login attempt here!
    setIsLoading(true);
    setIsLoginDisabled(true);

    axios.post(`${process.env.REACT_APP_API_URL}/authenticate`, {
      email: 'test',
      password: '123asdasd'
    })
    .then(res => {
      setIsLoading(false);
      console.log(res);
    })
    .catch(err => {
      console.log(err.response.data.message)
      toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_CENTER
      });
      setIsLoading(false);
      setIsLoginDisabled(false);
    })
  }

  // Checks if we should display the loading spinner.
  let buttonContent;
  if(!isLoading){
    buttonContent = <span>Login</span>
  } else {
    buttonContent =
    <span>
      <FontAwesomeIcon icon="spinner" spin />
    </span>
  }

  return (
    <div className="the-login-form">
      {fields.map((input, idx) => (
        <TextInput
          key={input.key}
          type={input.type}
          variant={input.variant}
          disabled={isLoading}
          placeholder={input.placeholder}
          onChange={e => { handleInputChange(e, idx)}}
        />
      ))}
      <div className="actions-bar">
        <BaseButton
          size="full"
          variant="primary"
          buttonType="filled"
          disabled={isLoginDisabled}
          onClick={e => {handleButtonClick()}}
        >
          {buttonContent}
        </BaseButton>
      </div>
    </div>
  );
};

export default TheLoginForm;
