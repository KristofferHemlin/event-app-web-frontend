import React from 'react';
import './BackgroundImagePane.scss';

const BackgroundImagePane = (props) => (
  <div
    className="background-image-pane"
    style={{
      backgroundImage: `url(${props.backgroundImage})`,
      
    }}
  >
    {props.children}
  </div>
);

export default BackgroundImagePane;
