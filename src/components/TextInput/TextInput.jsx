import React from 'react';
import './TextInput.scss'

const TextInput = ({
  label,
  type,
  name,
  onChange
}) => {
  return (
    <div className="text-input-container">
    <div className="input-background-pane"></div>
    <input
      type={type}
      name="asdf"
      placeholder=" "
      onChange={onChange}
    />
    <label htmlFor="">{ label }</label>
    </div>
  );
};

export default TextInput;
