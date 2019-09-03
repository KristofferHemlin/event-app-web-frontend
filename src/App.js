import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserEdit, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import LoginPage from './views/LoginPage/LoginPage';
import SignupPage from './views/SignupPage/SignupPage';
import ForgottenPassword from './views/ForgottenPassword/ForgottenPassword';
import Dashboard from './views/Dashboard/Dashboard';

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


library.add(faUserEdit, faSpinner);

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        <Route exact path="/" component={LoginPage}></Route>
        <Route path="/signup" component={SignupPage}></Route>
        <Route path="/forgotten-password" component={ForgottenPassword}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
      </Router>
    </div>
  );
}

export default App;
