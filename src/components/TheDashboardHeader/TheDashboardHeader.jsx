import React, { useState} from 'react';
import './TheDashboardHeader.scss'
import { withRouter } from 'react-router-dom'
import { useStateValue } from '../StateProvider/StateProvider';

import BaseButton from '../../components/BaseButton/BaseButton';
import background from '../../assets/images/login-bg.png';
import { Link } from 'react-router-dom';

const TheDashboardHeader = withRouter(({ history }) => {

  const [{ userInfo }] = useStateValue();
  let [mobileMenuVisibillityState, setMobileMenuVisibillityState] = useState(false);

  const goToRoute = (path) => {
    setMobileMenuVisibillityState(false);
    history.push(path);
  };

  return (
    <div className="dashboard-header" style={{backgroundImage: `url(${background})`}}>
      <div className="left-side">
        <h1>
          {userInfo.firstName + " " + userInfo.lastName + " @ "}
          <Link to="/">{userInfo.company ? userInfo.company.title : 'sfd'}</Link>
        </h1>
      </div>
      <div className="right-side">
        <BaseButton
          size="md"
          variant="primary"
          buttonType="filled"
          onClick={() => setMobileMenuVisibillityState(!mobileMenuVisibillityState)}
        >Menu</BaseButton>

      <div className={`user-menu ${mobileMenuVisibillityState ? 'open': ''}`}>
        <div className="link-menu">
          <button onClick={() => goToRoute('/my-profile')}>My profile</button>
          <button onClick={() => goToRoute('/logout')}>Logout</button>
        </div>
      </div>

      </div>
    </div>
  );
});

export default TheDashboardHeader;
