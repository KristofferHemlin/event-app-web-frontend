import React, { useState, useEffect } from 'react';
import './UserProfile.scss';
import SectionPaneHeader from '../../components/SectionPaneHeader/SectionPaneHeader';
import BaseButton from '../../components/BaseButton/BaseButton';
import { withRouter } from 'react-router-dom'
import { useStateValue } from '../../components/StateProvider/StateProvider';

const UserProfile = withRouter(({ history, match, profileData }) => {

    const [{ userInfo }] = useStateValue();
    let [editMode, setEditMode] = useState(false);
    let [formFields, setFormFields] = useState([
        {
            key: 'ajskdn',
            type: 'text',
            label: 'label',
            value: ''   
        }
    ])

    return (
        <div>
            <div className="my-profile-page">
                <BaseButton
                    buttonType="frame"
                    onClick={() => history.goBack()}
                >Go back</BaseButton>
                <SectionPaneHeader
                    title="User Profile"
                >
                    {
                        userInfo.id === profileData.id  ? 
                        (
                            <BaseButton
                                size="md"
                                variant="primary"
                                buttonType="frame"
                                onClick={() => setEditMode(!editMode)}
                            >
                                Edit Profile
                            </BaseButton>
                        ) : 
                        (
                            <div></div>
                        )
                    }
                    

                </SectionPaneHeader>
                <div className="user-profile">
                    <div className="profile-header">
                        <img className="user-photo" src={process.env.REACT_APP_API_URL + '/' + profileData.profileImageUrl} alt="" />
                        <h1>{profileData.firstName || null} {profileData.lastName || null}</h1>
                        <h2>{profileData.companyDepartment || 'N/A'}</h2>
                    </div>
                    <div className="profile-body">
                        <div className="inner-body">
                            <div className="info-row">
                                <label htmlFor="">Email</label>
                                <div className="value">{profileData.email || null}</div>
                            </div>
                            <div className="info-row">
                                <label htmlFor="">Phone</label>
                                <div className="value">{profileData.phone || 'N/A'}</div>
                            </div>
                            <div className="info-row">
                                <label htmlFor="">About Me</label>
                                <div className="value">{profileData.aboutMe || 'N/A'}</div>
                            </div>
                            <div className="info-row">
                                <label htmlFor="">Allergies / Food Preferences</label>
                                <div className="value">{profileData.preferences || 'N/A'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
});

export default UserProfile;