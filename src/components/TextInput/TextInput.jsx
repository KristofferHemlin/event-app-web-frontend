import React from 'react';
import './TextInput.scss'

const TextInput = () => {
  return (
    <div className="text-input-container">
    <input type="text" name="asdf" placeholder=" "/>
    <label htmlFor="">First name</label>
    </div>
  );
};

export default TextInput;
