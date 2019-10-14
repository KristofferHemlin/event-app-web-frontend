import React from 'react';
import './SectionPaneHeader.scss';
import InfoPopover from '../InfoPopover/InfoPopover';

const SectionPaneHeader = ({ title, children }) => {
  return (
    <div className="section-pane-header">
      <div className="left-side">
        <h3>{ title }</h3>
        <InfoPopover />
      </div>
      <div className="right-side">
        { children }
      </div>
    </div>
  );
};

export default SectionPaneHeader;
