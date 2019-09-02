import React from 'react';
import './TextInput.scss';

let getInputClasses = (props) => {
  return `${props.variant}`;
};

const TextInput = (props) => (
  <div className={`text-input ${getInputClasses(props)}`}>
    <label htmlFor="">{props.label}</label>
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  </div>
);

export default TextInput;
