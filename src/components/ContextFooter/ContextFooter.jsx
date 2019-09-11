import React from 'react';
import './ContextFooter.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContextFooter = ({ children }) => {
  return (
    <div className="context-footer">
      { children }
    </div>
  );
};

export default ContextFooter;
