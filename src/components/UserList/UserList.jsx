import React from 'react';
import './UserList.scss';
import { withRouter } from 'react-router-dom';
import UserListPane from '../UserListPane/UserListPane';

const UserList = withRouter(({
  history,
  users,
  routeTo,
}) => {
  return (
    <ul className="user-list">
      {
        users.map((user, idx) => {
          return <li key={idx}>
            <UserListPane
              firstName={user.firstName}
              lastName={user.lastName}
              imageName={user.profileImageUrl}
              role={user.role}
              onClick={() => history.push(`${routeTo}/${user.id}`)}
            ></UserListPane>
          </li>
        })
      }
    </ul>
  );
});

export default UserList;
