import React from 'react';
import '../UserListPane/UserListPane.scss';



const UserListPane = ({
  firstName,
  lastName,
  imageName,
  onClick
}) => {
    return (
        <div
          className="user-list-pane"
          onClick={onClick}
        >
            <div className="left-block">
              <img src={`${process.env.REACT_APP_API_URL}/${imageName}`} alt=""/>
            </div>
            <div className="right-block">
                <span>{firstName} {lastName}</span>
            </div>
        </div>
    );
};

export default UserListPane;
