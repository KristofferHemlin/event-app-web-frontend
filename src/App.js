import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserEdit, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Interfaces
import LoginInterface from './interfaces/LoginInterface/LoginInterface';
import DashboardInterface from './interfaces/DashboardInterface/DashboardInterface';

// Pages
import PageNotFound from './views/PageNotFound/PageNotFound';

// Route Components
import RouteChangeListener from './components/RouteChangeListener/RouteChangeListener';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

// State Component
import { StateProvider } from './components/StateProvider/StateProvider';

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


library.add(faUserEdit, faSpinner);

function App() {

  const initialState = {
    isLoggedIn: false,
    userInfo: {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ClearState':
        return {
          ...initialState
        };
      case 'ChangeLoginStatus':
        return {
          ...state,
          isLoggedIn: action.newStatus,
        };
      case 'UpdateUserInformation':
        return {
          ...state,
          userInfo: action.newUserInfo,
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <ToastContainer/>
        <Router>
          <RouteChangeListener>
            <Switch>
              <PublicRoute
                exact
                restricted={ true }
                path="/(login|signup|forgot-password|reset-password)"
                component={ LoginInterface }>
              </PublicRoute>
              <PrivateRoute
                component={ DashboardInterface }
                path="/"
              ></PrivateRoute>
            <PublicRoute
              component={ PageNotFound }>
            </PublicRoute>
            </Switch>
          </RouteChangeListener>
        </Router>
      </div>
    </StateProvider>
  );
}

// <PublicRoute
//   exact
//   restricted={true}
//   path="/"
//   component={LoginPage}>
// </PublicRoute>
//
// <PublicRoute
//   exact
//   restricted={true}
//   path="/signup"
//   component={SignupPage}>
// </PublicRoute>
//
// <PublicRoute
//   exact
//   restricted={true}
//   path="/forgotten-password"
//   component={ForgottenPassword}>
// </PublicRoute>
//
// <PrivateRoute
//   exact
//   component={Dashboard}
//   path="/dashboard">
// </PrivateRoute>
//
// <PublicRoute
//   component={PageNotFound}>
// </PublicRoute>



export default App;
