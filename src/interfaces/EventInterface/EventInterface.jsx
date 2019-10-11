import React, { useState, useEffect} from 'react';
import './EventInterface.scss';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TheDashboardHeader from '../../components/TheDashboardHeader/TheDashboardHeader';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import EventOverview from '../../views/EventOverview/EventOverview';
import MyProfilePage from '../../views/MyProfilePage/MyProfilePage';
import ContextFooter from '../../components/ContextFooter/ContextFooter';
import { linkSync } from 'fs';
import EventParticipants from '../../views/EventParticipants/EventParticipants';
import SingleEventParticipant from '../../views/SingleEventParticipant/SingleEventParticipant';

const EventInterface = withRouter(({ history, match }) => {

    let [currentPane, setCurrentPane] = useState(0);
    let [paneLinks, setPaneLinks] = useState([
        {
            key: 'overview',
            title: 'Event Overview',
            routeUrl: `/event/${match.params.eventId}`,
            icon: '',
        },
        {
            key: 'participants',
            title: 'Event Participants',
            icon: '',
            routeUrl: `/event/${match.params.eventId}/participants`,
        },
        {
            key: 'schedule',
            title: 'Schedule',
            icon: '',
        },
        {
            key: 'updates',
            title: 'Updates',
            icon: '',
        }
    ]);

    useEffect(() => {
        console.log(match)
    }, [])

    const onFooterNavigation = (idx, routeUrl) => {
        setCurrentPane(idx);
        history.push(routeUrl);
    }

    return (
        <div className="dashboard-interface">
            <Switch>

                <PrivateRoute
                    exact
                    component={EventOverview}
                    path="/event/:eventId">
                </PrivateRoute>

                <PrivateRoute
                    exact
                    component={EventParticipants}
                    path="/event/:eventId/participants">
                </PrivateRoute>

                <PrivateRoute
                    exact
                    component={SingleEventParticipant}
                    path="/event/:eventId/participants/:userId">
                </PrivateRoute>

            </Switch>
            <div>
                <ContextFooter>
                    { paneLinks.map((link, idx) => {
                        return (
                            <button
                              key={idx}
                              className={currentPane === idx ? 'active' : ''}
                              onClick={() => onFooterNavigation(idx, link.routeUrl)}
                            >
                                <FontAwesomeIcon icon="info-circle" size="2x" />
                                <span>{link.title}</span>
                            </button>
                        )
                    })}

                </ContextFooter>
            </div>

        </div>
    )
});

export default EventInterface;
