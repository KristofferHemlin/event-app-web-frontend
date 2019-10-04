import React from 'react';
import './TextInput.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TextInput = ({
  value,
  label,
  type,
  name,
  variant,
  onChange,
}) => {
  return (
    <div className={`text-input-container ${variant}`} >
    <div className="input-background-pane"></div>
    <input
      type={type}
      name="asdf"
      placeholder=" "
      value={value}
      onChange={onChange}
    />
    <label htmlFor="">{ label }</label>
    <div className="validation-message-container">
      <p>ajskdnsajhdb aksöbndkjsajh asjbdhjsada. ajshbdbasj jahsdbahjldshj jabhsdbsagdh jhasdb.</p>
    </div>
    </div>
  );
};

export default TextInput;
