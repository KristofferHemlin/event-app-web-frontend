import React, {useEffect, useState} from 'react';
import './EventParticipants.scss';
import { withRouter } from 'react-router-dom';
import { useStateValue } from '../../components/StateProvider/StateProvider';
import SectionPaneHeader from '../../components/SectionPaneHeader/SectionPaneHeader';
import BaseButton from '../../components/BaseButton/BaseButton';
import UserFilterBar from '../../components/UserFilterBar/UserFilterBar';
import UserList from '../../components/UserList/UserList';
import axios from 'axios';


const EventParticipants = withRouter(({ history, match }) => {

    const [{ userInfo }] = useStateValue();

    const [participantList, setParticipantList] = useState([]);
    const [currentListedParticipants, setCurrentListedParticipants] = useState([]);

    const fetchEventParticipants = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/events/${match.params.eventId}/users`)
        .then(participants => {
            console.log(participants);
            setParticipantList(participants.data);
            setCurrentListedParticipants(participants.data);
        })
        .catch(err => {
            console.log(err);
        })
    };

    useEffect(() => {
        fetchEventParticipants();
    }, [])

    const onFilterChange = (e) => {
      setCurrentListedParticipants(participantList.filter(user => {
        return (`${user.firstName} ${user.lastName}`).toLowerCase().includes(e.target.value.toLowerCase());
      }))
    };


    return (
        <div className="event-participants-page" >
          <SectionPaneHeader
              title="Event Participants"
          >
              <BaseButton
                  size="md"
                  variant="primary"
                  buttonType="frame"
                  onClick={() => console.log('test')}
              >
                  Action
              </BaseButton>
          </SectionPaneHeader>
          <UserFilterBar
            onChange={onFilterChange}
          />
          <UserList
            users={currentListedParticipants}
            routeTo={`/event/${match.params.eventId}/participants`}
          />
        </div>
    );
});

export default EventParticipants;
