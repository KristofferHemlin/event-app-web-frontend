import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserEdit, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import LoginPage from './views/LoginPage/LoginPage';
import SignupPage from './views/SignupPage/SignupPage';
import ForgottenPassword from './views/ForgottenPassword/ForgottenPassword';
import Dashboard from './views/Dashboard/Dashboard';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


library.add(faUserEdit, faSpinner);

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>

        <PublicRoute
          exact
          restricted={true}
          path="/"
          component={LoginPage}
          isLoggedIn={false}>
        </PublicRoute>

        <PublicRoute
          exact
          restricted={true}
          path="/signup"
          component={SignupPage}
          isLoggedIn={false}>
        </PublicRoute>

        <PublicRoute
          exact
          restricted={true}
          path="/forgotten-password"
          component={ForgottenPassword}
          isLoggedIn={false}>
        </PublicRoute>

        <PrivateRoute
          component={Dashboard}
          path="/dashboard"
          isLoggedIn={false}
          exact>
        </PrivateRoute>

      </Router>
    </div>
  );
}

export default App;
