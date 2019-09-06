import React from 'react';
import './FullScreenSpinner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FullScreenSpinner = () => (
  <div className="full-screen-spinner">
    <FontAwesomeIcon icon="spinner" size="3x" spin />
  </div>
);

export default FullScreenSpinner;
