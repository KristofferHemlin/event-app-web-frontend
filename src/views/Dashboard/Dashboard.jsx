import React from 'react';
import './Dashboard.scss'
import TheDashboardHeader from '../../components/TheDashboardHeader/TheDashboardHeader';
import TextInput from '../../components/TextInput/TextInput';

import CompanyOverview from '../CompanyOverview/CompanyOverview';


let Dashboard = () => {
  return (
    <div className="dashboard-page">
      <TheDashboardHeader />
      <div className="dashboard-content-pane">
        <CompanyOverview />
      </div>
    </div>
  );
};



export default Dashboard;
