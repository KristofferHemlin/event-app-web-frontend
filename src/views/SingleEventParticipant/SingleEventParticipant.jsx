import React, {useState, useEffect} from 'react';
import './SingleEventParticipant.scss';
import UserProfile from '../../components/UserProfile/UserProfile';
import { withRouter } from 'react-router-dom'
import axios from 'axios';

const SingleEventParticipant = withRouter(({ history, match }) => {

    let [selectedProfile, setSelectedProfile] = useState({}); 

    const fetchUserProfile = () => {
        console.log('asfjknsal');
        axios.get(`${process.env.REACT_APP_API_URL}/events/${match.params.eventId}/users/${match.params.userId}`)
        .then(profile => {
            console.log(profile);
            setSelectedProfile(profile.data);
        })
        .catch(error => {
            console.log(error)
        }) 
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    return (
        <div className="single-event-participant">
            <UserProfile 
                profileData={selectedProfile}
            />
        </div>
    );
});

export default SingleEventParticipant;