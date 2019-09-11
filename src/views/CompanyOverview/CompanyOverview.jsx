import React, { useState } from 'react';
import './CompanyOverview.scss';
import axios from 'axios';

import SectionPaneHeader from '../../components/SectionPaneHeader/SectionPaneHeader';
import SectionLineHeader from '../../components/SectionLineHeader/SectionLineHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MobileActionMenu from '../../components/MobileActionMenu/MobileActionMenu';
import BaseButton from '../../components/BaseButton/BaseButton';
import ContextFooter from '../../components/ContextFooter/ContextFooter';

const CompanyOverview = () => {

  let [mobileMenuVisibillityState, setMobileMenuVisibillityState] = useState(false);
  let [currentPane, setCurrentPane] = useState('Company Overview');
  const toggleMobileMenu = () => {
    setMobileMenuVisibillityState(!mobileMenuVisibillityState);
  }

  const setActivePane = (paneName) => {
    setCurrentPane = 'paneName';
  };


  return (
    <div className="company-overview-page">

      { mobileMenuVisibillityState === true ?
        <MobileActionMenu
          menuTitle="Company Actions"
          onClose={ () => toggleMobileMenu() }
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
              onClick={() => toggleMobileMenu()}
            >
              Action
            </BaseButton>

          </SectionPaneHeader>

          <div>
            <SectionLineHeader
              title="Current Events"
            />
            <div className="empty-list-placeholder">
              <span>There are currently no planned events. :(</span>
            </div>
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
              onClick={() => toggleMobileMenu()}
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
