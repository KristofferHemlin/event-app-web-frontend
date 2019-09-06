import React from 'react';
import './BaseInput.scss';

let getInputClasses = (props) => {
  let classString = '';
  classString += `${props.variant} `;

  // if loading, set the disabled class.
  if (props.isLoading){
    classString += 'disabled ';
  }

  return classString;
};

const TextInput = (props) => (
  <div className={`text-input ${getInputClasses(props)}`}>
    <label htmlFor="">{props.label}</label>
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      disabled={props.disabled}
    />
  </div>
);

export default TextInput;
