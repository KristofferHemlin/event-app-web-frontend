import React, { useState, useEffect } from 'react';
import './TheSignupForm.scss'

import BaseInput from '../../components/BaseInput/BaseInput';
import BaseButton from '../../components/BaseButton/BaseButton';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter, Link } from 'react-router-dom'

const TheSignupForm = withRouter(({ history }) => {

  let [fields, setFields] = useState([
    {
      key: 'firstName',
      name: 'First Name',
      type: 'text',
      label: 'First Name',
      placeholder: 'John',
      value: '',
    },
    {
      key: 'lastName',
      name: 'Last Name',
      type: 'text',
      label: 'Last Name',
      placeholder: 'Doe',
      value: '',
    },
    {
      key: 'email',
      name: 'Email',
      type: 'text',
      label: 'Email',
      placeholder: 'johndoe@company.com',
      value: '',
    },
    {
      key: 'phone',
      name: 'Phone',
      type: 'text',
      label: 'Phone',
      placeholder: '0324-1232131',
      value: '',
    },
    {
      key: 'companyName',
      name: 'Company Name',
      type: 'text',
      label: 'Company Name',
      placeholder: 'Test Company',
      value: '',
    },
    {
      key: 'companyDepartment',
      name: 'Company Department',
      type: 'text',
      label: 'Company Department',
      placeholder: 'Dev Ops Department',
      value: '',
    },
    {
      key: 'password',
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: '********',
      value: '',
    },
    {
      key: 'rePassword',
      name: 'rePassword',
      type: 'password',
      label: 'Re-type Password',
      placeholder: '********',
      value: '',
    },
  ]);

  let [isLoading, setIsLoading] = useState(false);
  let [isSignupDisabled, setIsSignupDisabled] = useState(true)

  let handleInputChange = (event, i) => {
    let values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  };

  let handleButtonClick = (e) => {

    setIsSignupDisabled(true);
    setIsLoading(true);

    let body = {
      firstName: fields.find(input => input.key === 'firstName').value,
      lastName: fields.find(input => input.key === 'lastName').value,
      email: fields.find(input => input.key === 'email').value,
      phone: fields.find(input => input.key === 'phone').value,
      title: fields.find(input => input.key === 'companyName').value,
      password: fields.find(input => input.key === 'password').value,
    };

    console.log(body);

    axios.post(`${process.env.REACT_APP_API_URL}/sign-up-new-user`, body)
    .then(res => {
      console.log(res);
      toast('Account signup successfull.', {
          position: toast.POSITION.TOP_CENTER
      });
      setIsSignupDisabled(false);
      setIsLoading(false);
      history.push('/')
    })
    .catch(err => {
      console.log(err);
      if(!err.response){
        toast.error('Could not sign you up at this moment, please try again later.', {
            position: toast.POSITION.TOP_CENTER
        });
      } else {
        toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_CENTER
        });
      }
      setIsSignupDisabled(false);
      setIsLoading(false);
    })
  };

  // Checks if we should display the loading spinner.
  let buttonContent;
  if(!isLoading){
    buttonContent = <span>Complete Sign Up</span>
  } else {
    buttonContent =
    <span>
      <FontAwesomeIcon icon="spinner" spin />
    </span>
  }

  // Check if the form validity.
  useEffect(() => {
    if (fields.every(input => input.value.length !== 0 && !isLoading)){
      setIsSignupDisabled(false);
    };
  });

  return (
    <div className="the-signup-form">
      { fields.map( (input, idx) => {
        return <BaseInput
          key={input.key}
          name={input.name}
          type={input.type}
          label={input.label}
          placeholder={input.placeholder}
          disabled={isLoading}
          onChange={e => handleInputChange(e, idx)}
          variant="subtle"
        />
      })}
      <BaseButton
        size="full"
        variant="primary"
        disabled={isSignupDisabled}
        onClick={() => handleButtonClick()}
      >{ buttonContent }</BaseButton>
    </div>
  )
});

export default TheSignupForm;
