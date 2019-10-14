import React from 'react';
import './MyProfilePage.scss';
import { useStateValue } from '../../components/StateProvider/StateProvider';
import { withRouter } from 'react-router-dom'

import SectionPaneHeader from '../../components/SectionPaneHeader/SectionPaneHeader';
import BaseButton from '../../components/BaseButton/BaseButton';
import UserProfile from '../../components/UserProfile/UserProfile';

const MyProfilePage = withRouter(({ history }) => {

  const [{ userInfo }] = useStateValue();

  return (
    <div className="my-profile-page">
      <UserProfile
        profileData={userInfo}
      ></UserProfile>
    </div>
  )
});

export default MyProfilePage;
