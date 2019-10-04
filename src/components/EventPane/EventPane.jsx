import React from 'react';
import './EventPane.scss';
import { withRouter } from 'react-router-dom'

const EventPane = withRouter(({ history, title, linkTo }) => {
    return (
        <div 
        className="event-pane"
        onClick={() => history.push(linkTo) }
        >
           <h6>{title}</h6>
       </div> 
    )
});

export default EventPane;