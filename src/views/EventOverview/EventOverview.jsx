import React from 'react';
import './EventOverview.scss';

import SectionPaneHeader from '../../components/SectionPaneHeader/SectionPaneHeader';
import BaseButton from '../../components/BaseButton/BaseButton';
import ActionsContextMenu from '../../components/ActionsContextMenu/ActionsContextMenu';

const EventOverview = () => {
    return (
    <div className="event-overview-page">
        <div className="event-image-banner">
            <div className="inner-content">
                <h1>TEST TITLE</h1>
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
                     <p>
                        Cras ut suscipit elit. Nulla cursus velit urna, et dictum tellus ultrices eu.
                        Etiam dignissim dui dolor, id blandit quam vulputate vel. Maecenas laoreet
                        lacinia nisl id condimentum. Phasellus vel erat sit amet turpis faucibus
                        convallis. Donec viverra mauris et hendrerit feugiat. Aliquam id magna nisl.
                        Maecenas eu malesuada diam.
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