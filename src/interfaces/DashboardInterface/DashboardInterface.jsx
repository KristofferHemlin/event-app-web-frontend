import React from 'react';
import TheDashboardHeader from '../../components/TheDashboardHeader/TheDashboardHeader';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import { Switch } from 'react-router-dom';


// Pages
import CompanyOverview from '../../views/CompanyOverview/CompanyOverview';
import MyProfilePage from '../../views/MyProfilePage/MyProfilePage';
import PageNotFound from '../../views/PageNotFound/PageNotFound';
import EventInterface from '../EventInterface/EventInterface';

const Dashboard = () => {
  return (
    <div>
      <TheDashboardHeader />
      <div className="dashboard-content-pane">
        <Switch>

          <PrivateRoute
            exact
            component={CompanyOverview}
            path="/">
          </PrivateRoute>

          <PrivateRoute
            exact
            path="/my-profile"
            component={MyProfilePage}>
          </PrivateRoute>

          <PrivateRoute
            path="/event/:eventId"
            component={EventInterface}>
          </PrivateRoute>


          <PrivateRoute
            component={PageNotFound}>
          </PrivateRoute>

        </Switch>
      </div>
    </div>
  )
};

export default Dashboard;
