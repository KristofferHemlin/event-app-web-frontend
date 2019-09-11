import React from 'react';
import './MobileActionMenu.scss';

const MobileActionMenu = ({ menuTitle, onClose}) => {

  const links = [
    {
      name: 'Edit Company Info'
    },
    {
      name: 'Create Company Event',
    },
    {
      name: 'Delete Company from App',
    },
  ]

  return (
    <div className="mobile-navigation-menu">
      <div className="inner-menu">
        <h1>{menuTitle}</h1>
        <ul>
          {
            links.map((link, idx) => {
              return (
                <li>{link.name}</li>
              )
            })
          }
        </ul>
        <button className="btn-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MobileActionMenu;
