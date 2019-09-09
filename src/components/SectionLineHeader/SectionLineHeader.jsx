import React from 'react';
import './SectionLineHeader.scss';

const SectionLineHeader = ({ title }) => (
  <div className="section-line-header">
    <span className="title">{ title }</span>
    <div className="line"></div>
  </div>
);

export default SectionLineHeader;
