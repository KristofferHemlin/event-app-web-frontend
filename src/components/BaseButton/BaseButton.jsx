import React from 'react';
import './BaseButton.scss';

let getButtonClasses = (variant, size, buttonType) => {
  return `btn ${(variant || 'default')} ${(size || 'md')} ${(buttonType || 'filled')}`
}

const BaseButton = ({children, type, disabled, onClick, variant, size, buttonType}) => (
  <button
    type={type}
    disabled={disabled}
    className={getButtonClasses(variant, size, buttonType)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default BaseButton;
