import React from 'react';
import './SectionPaneHeader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SectionPaneHeader = ({ title, children }) => {
  return (
    <div className="section-pane-header">
      <div className="left-side">
        <h3>{ title }</h3>
        <div className="info-icon-container">
          <div className="info-icon">
            <FontAwesomeIcon icon="info" />
          </div>
        </div>
      </div>
      <div className="right-side">
        { children }
      </div>
    </div>
  );
};

export default SectionPaneHeader;
