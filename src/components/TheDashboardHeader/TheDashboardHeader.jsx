import React from 'react';
import './TheDashboardHeader.scss'
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import { useStateValue } from '../StateProvider/StateProvider';

import BaseButton from '../../components/BaseButton/BaseButton';

const TheDashboardHeader = withRouter(({ history }) => {

  const [{ userInfo }, dispatch] = useStateValue();

  const logOut = () => {
    localStorage.clear();
    delete axios.defaults.headers.common["Authorization"];
    dispatch({
      type: 'ClearState',
    });
    history.push('/');
    console.log('logout did its thing');
  }

  return (
    <div className="dashboard-header">
      <div className="left-side">
        <h1>
          {userInfo.firstName + " " + userInfo.lastName + " @ "}
          {userInfo.company ? userInfo.company.title : 'sfd'}
        </h1>
      </div>
      <div className="right-side">
        <BaseButton
          size="sm"
          variant="danger"
          buttonType="filled"
          onClick={() => logOut()}
        >Logout</BaseButton>
      </div>
    </div>
  );
});

export default TheDashboardHeader;
