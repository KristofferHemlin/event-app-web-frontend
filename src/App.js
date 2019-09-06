import React, { useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserEdit, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

// Pages
import LoginPage from './views/LoginPage/LoginPage';
import SignupPage from './views/SignupPage/SignupPage';
import ForgottenPassword from './views/ForgottenPassword/ForgottenPassword';
import Dashboard from './views/Dashboard/Dashboard';

// Route Components
import RouteChangeListener from './components/RouteChangeListener/RouteChangeListener';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

// State Component
import { StateProvider } from './components/StateProvider/StateProvider';

// Toast
import { ToastContainer, toast } from 'react-toastify';
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

            <PublicRoute
              exact
              restricted={true}
              path="/"
              component={LoginPage}>
            </PublicRoute>

            <PublicRoute
              exact
              restricted={true}
              path="/signup"
              component={SignupPage}>
            </PublicRoute>

            <PublicRoute
              exact
              restricted={true}
              path="/forgotten-password"
              component={ForgottenPassword}>
            </PublicRoute>

            <PrivateRoute
              component={Dashboard}
              path="/dashboard"
              exact>
            </PrivateRoute>

          </RouteChangeListener>
        </Router>
      </div>
    </StateProvider>
  );
}

export default App;
