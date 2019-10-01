import React from 'react';
import './ContextFooter.scss';

const ContextFooter = ({ children }) => {
  return (
    <div className="context-footer">
      { children }
    </div>
  );
};

export default ContextFooter;
