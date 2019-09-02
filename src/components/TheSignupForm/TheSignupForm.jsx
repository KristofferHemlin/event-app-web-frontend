import React, { useState, useEffect } from 'react';
import './TheSignupForm.scss'

import TextInput from '../../components/TextInput/TextInput';
import BaseButton from '../../components/BaseButton/BaseButton';

const TheSignupForm = () => {

  let handleInputChange = (event, i) => {
    let values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
    console.log(values);
  };

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
  ]);

  return (
    <div className="the-signup-form">
      { fields.map( (input, idx) => {
        return <TextInput
          key={input.key}
          name={input.name}
          label={input.label}
          placeholder={input.placeholder}
          onChange={e => handleInputChange(e, idx)}
          variant="subtle"
        ></TextInput>
      })}
      <BaseButton
        size="full"
        variant="primary"
        disabled={true}
      >Complete Sign Up</BaseButton>
    </div>
  )
};

export default TheSignupForm;
