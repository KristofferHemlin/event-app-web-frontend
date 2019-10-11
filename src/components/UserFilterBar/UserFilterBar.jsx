import React from 'react';
import './UserFilterBar.scss';

const UserFilterBar = ({
  onChange
}) => {
  return (
    <div className="user-filter-bar">
      <input
        type="text"
        placeholder="Search for a participant"
        onChange={(e) => onChange(e)}
      />
    </div>
  )
};

export default UserFilterBar;
