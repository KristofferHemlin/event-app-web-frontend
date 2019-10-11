import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Router components
import RouteChangeListener from '../components/RouteChangeListener/RouteChangeListener';
import PublicRoute from '../components/PublicRoute/PublicRoute';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

// Interfaces
import LoginInterface from '../interfaces/LoginInterface/LoginInterface';
import DashboardInterface from '../interfaces/DashboardInterface/DashboardInterface';

// Pages
import PageNotFound from '../views/PageNotFound/PageNotFound';
import FirstTimeSetupPage from '../views/FirstTimeSetupPage/FirstTimeSetupPage';

// State
import { useStateValue } from '../components/StateProvider/StateProvider';
import EventInterface from '../interfaces/EventInterface/EventInterface';



const AppRouter = () => {

    const [{ isLoggedIn }, dispatch] = useStateValue();

    return (
        <div id="app-router">
            <Router>
                <RouteChangeListener>
                    <Switch>
                        <PublicRoute
                            exact
                            restricted={true}
                            path="/(login|signup|forgotten-password|reset-password|logout)"
                            component={LoginInterface}>
                        </PublicRoute>
                        <PrivateRoute
                            component={FirstTimeSetupPage}
                            path="/first-time-setup"
                        ></PrivateRoute>
                        <PrivateRoute
                            component={DashboardInterface}
                            path="/"
                        ></PrivateRoute>
                        <PublicRoute
                            component={PageNotFound}>
                        </PublicRoute>
                    </Switch>
                </RouteChangeListener>
            </Router>
        </div>
    )
};

export default AppRouter;