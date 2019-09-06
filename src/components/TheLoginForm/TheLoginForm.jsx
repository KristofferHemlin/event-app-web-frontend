import React, { useState, useEffect } from 'react';

import TextInput from '../../components/TextInput/TextInput';
import BaseButton from '../../components/BaseButton/BaseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom'

import { useStateValue } from '../../components/StateProvider/StateProvider';

const TheLoginForm = withRouter(({ history }) => {

  const [{ userInfo }, dispatch] = useStateValue();
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


  // Update the form field values.
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


  // Handle the login attempt.
  let handleButtonClick = () => {
    setIsLoading(true);
    setIsLoginDisabled(true);

    // Set up login request body.
    let accountName = fields.find(input => input.key === 'accountName').value;
    let accountPassword = fields.find(input => input.key === 'accountPassword').value;

    // Start login attempt.
    axios.post(`${process.env.REACT_APP_API_URL}/authenticate`, {
      email: accountName,
      password: accountPassword,
    })
    .then(res => {
      setIsLoading(false);
      setIsLoginDisabled(false);

      // TODO: Store token into localStorage for ease of access. (Check with someon on XXS-attack risks.)
      // TODO:

      console.log(res);
      localStorage.setItem('userToken', res.data.token );


      // Sets our access JWT token as a header.
      axios.defaults.headers.common['Authorization'] = res.data.token;
      dispatch({
        type: 'ChangeLoginStatus',
        newStatus: true
      })

      history.push('/dashboard');
    })
    .catch(err => {

      if(!err.response){
        toast.error('Could not log you in at this moment, please try again later.', {
            position: toast.POSITION.TOP_CENTER
        });
      } else {
        toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_CENTER
        });
      }

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
});

export default TheLoginForm;
