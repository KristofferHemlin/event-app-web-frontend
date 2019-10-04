import React from 'react';
import './MyProfilePage.scss';
import { useStateValue } from '../../components/StateProvider/StateProvider';
import { withRouter } from 'react-router-dom'

import SectionPaneHeader from '../../components/SectionPaneHeader/SectionPaneHeader';
import BaseButton from '../../components/BaseButton/BaseButton';
const MyProfilePage = withRouter(({ history }) => {

  const [{ userInfo }] = useStateValue();

  return (
    <div className="my-profile-page">
      <BaseButton
        buttonType="frame"
        onClick={() => history.goBack()}
      >Go back</BaseButton>
      <SectionPaneHeader
        title="User Profile"
      ></SectionPaneHeader>

      <div className="user-profile">
        <div className="profile-header">
          <img className="user-photo" src={process.env.REACT_APP_API_URL + '/' + userInfo.profileImageUrl} alt=""/>
          <h1>{ userInfo.firstName || null } { userInfo.lastName || null}</h1>
          <h2>Claremont Architecture and Development</h2>
        </div>
        <div className="profile-body">
          <div className="inner-body">
            <div className="info-row">
              <label htmlFor="">Role</label>
              <div className="value">Company Manager</div>
            </div>
            <div className="info-row">
              <label htmlFor="">Email</label>
              <div className="value">{ userInfo.email || null }</div>
            </div>
            <div className="info-row">
              <label htmlFor="">Phone</label>
              <div className="value">{ userInfo.phone || 'N/A' }</div>
            </div>
            <div className="info-row">
              <label htmlFor="">About Me</label>
              <div className="value">{ userInfo.aboutMe || 'N/A' }</div>
            </div>
            <div className="info-row">
              <label htmlFor="">Allergies / Food Preferences</label>
              <div className="value">{ userInfo.preferences || 'N/A'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default MyProfilePage;
