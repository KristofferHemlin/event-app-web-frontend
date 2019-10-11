import React, { useState, useEffect } from 'react';
import './CompanyOverview.scss';
import axios from 'axios';

import SectionPaneHeader from '../../components/SectionPaneHeader/SectionPaneHeader';
import SectionLineHeader from '../../components/SectionLineHeader/SectionLineHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ActionsContextMenu from '../../components/ActionsContextMenu/ActionsContextMenu';
import BaseButton from '../../components/BaseButton/BaseButton';
import ContextFooter from '../../components/ContextFooter/ContextFooter';
import EventPane from '../../components/EventPane/EventPane';
import { useStateValue } from '../../components/StateProvider/StateProvider';

const CompanyOverview = () => {

  let [isLoadingEvents, setIsLoadingEvents] = useState(true);
  let [overviewContextMenu, setOverviewContextMenu] = useState(false);
  let [currentPane, setCurrentPane] = useState('Company Overview');
  let [currentlySelectedFile, setCurrentlySelectedFile] = useState();

  let [pastEvents, setPastEvents] = useState ([]); 
  let [currentEvents, setCurrentEvents] = useState([]); 

  const [{ userInfo }] = useStateValue();

  const fetchCompanyDetails = () => {
    console.log(userInfo);
    setIsLoadingEvents(true);
    axios.get(process.env.REACT_APP_API_URL + `/companies/${userInfo.company.id}/events`)
    .then(events => {
      console.log(events.data);
      setCurrentEvents(events.data)
    })
    .catch(err => console.log(err))
    .then(() => setIsLoadingEvents(false))
  }

  const toggleOverviweContextMenu = () => {
    setOverviewContextMenu(!overviewContextMenu);
  }

  const setActivePane = (paneName) => {
    setCurrentPane = 'paneName';
  };

  useEffect(() => {
    if (userInfo.id){
      fetchCompanyDetails();
    }
  }, [userInfo]);


  return (
    <div className="company-overview-page">

      { overviewContextMenu === true ?
        <ActionsContextMenu
          menuTitle="Company Actions"
          onClose={ () => toggleOverviweContextMenu() }
        /> : '' }

      <div className={`pane-container ${currentPane === 'Company Overview' ? '' : 'translated'}`}>
        <div className="company-overview-pane">
          <SectionPaneHeader
            title="Company Overview"
          >
            <BaseButton
              size="md"
              variant="primary"
              buttonType="frame"
              onClick={() => toggleOverviweContextMenu()}
            >
              Action
            </BaseButton>

          </SectionPaneHeader>

          <div>
            <SectionLineHeader
              title="Current Events"
            />
            {currentEvents.length === 0 ? (
              <div className="empty-list-placeholder">
                <span>There are currently no planned events. :(</span>
              </div>
            ) : (
              currentEvents.map((event, idx) => {
                return <EventPane 
                  title={event.title} 
                  key={idx}
                  linkTo={`/event/${event.id}`}
                />
              })
            )}

            
          </div>

          <div>
            <SectionLineHeader
              title="Past Events"
            />
            <div className="empty-list-placeholder">
              <span>There have been no previous events. :(</span>
            </div>
          </div>
        </div>

        <div className="company-employee-pane">
          <SectionPaneHeader
            title="Company Employees"
          >
            <BaseButton
              size="md"
              variant="primary"
              buttonType="frame"
              onClick={() => toggleOverviweContextMenu()}
            >
              Action
            </BaseButton>

          </SectionPaneHeader>

        </div>
      </div>

      <ContextFooter>
        <button className={currentPane === 'Company Overview' ? 'active' : '' } onClick={() => setCurrentPane('Company Overview')}>
          <FontAwesomeIcon icon="info-circle" size="2x" />
          <span>Overview</span>
        </button>

        <button className={currentPane === 'Company Employees' ? 'active' : '' } onClick={() => setCurrentPane('Company Employees')}>
          <FontAwesomeIcon icon="users" size="2x" />
          <span>Employees</span>
        </button>
      </ContextFooter>

    </div>
  );
};

export default CompanyOverview;
