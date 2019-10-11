import React, { useEffect, useState} from 'react';
import './EventOverview.scss';

import SectionPaneHeader from '../../components/SectionPaneHeader/SectionPaneHeader';
import BaseButton from '../../components/BaseButton/BaseButton';
import ActionsContextMenu from '../../components/ActionsContextMenu/ActionsContextMenu';
import { useStateValue } from '../../components/StateProvider/StateProvider';
import axios from 'axios';

const EventOverview = () => {

    let [eventInfo, setEventInfo] = useState();

    const [{ userInfo }] = useStateValue();

    const fetchEvent = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/users/${userInfo.id}/currentevent`)
        .then(event => {
            console.log(event);
            setEventInfo(event.data);
        })
        .catch(err => {
            console.log(err);
        }) 
    } 

    useEffect(() => {
        fetchEvent();
    }, []);


    return (
    <div className="event-overview-page">
        <div className="event-image-banner">
            <div className="inner-content">
                {eventInfo ? (
                    <h1>{eventInfo.title}</h1>
                ) : (
                    <h1>TEST TITLE</h1>
                )}
            </div>
        </div>
        <div className="content-body">
            <div className="inner-content">
                <SectionPaneHeader
                    title="Event Overview"
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

                <div className="text-info-section">
                    <label htmlFor="">Event Description</label>
                        { eventInfo ? (
                            <p>{eventInfo.description}</p>
                        ) : (
                            <p>N/A</p>
                        )

                        }
                     <p>
                       
                    </p>
                </div>

                <div className="text-info-section">
                    <label htmlFor="">Location</label>
                    <p>
                        Cras ut suscipit elit.
                    </p>
                </div>

                <div className="text-info-section">
                    <label htmlFor="">Event Dates</label>
                    <p>
                        24/09/19 - 26/09/19
                    </p>
                </div>

                <div className="text-info-section">
                    <label htmlFor="">Nice-to-Know</label>
                    <p>
                        Cras ut suscipit elit. Nulla cursus velit urna, et dictum tellus ultrices eu.
                        Etiam dignissim dui dolor, id blandit quam vulputate vel. Maecenas laoreet
                        lacinia nisl id condimentum. Phasellus vel erat sit amet turpis faucibus
                        convallis. Donec viverra mauris et hendrerit feugiat. Aliqua
                    </p>
                </div>


            </div>
        </div>
    </div>
    )
}

export default EventOverview;