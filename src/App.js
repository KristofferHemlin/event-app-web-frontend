import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserEdit, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import LoginPage from './views/LoginPage/LoginPage';
import SignupPage from './views/SignupPage/SignupPage';
import ForgottenPassword from './views/ForgottenPassword/ForgottenPassword';


library.add(faUserEdit, faSpinner);

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LoginPage}></Route>
        <Route path="/signup" component={SignupPage}></Route>
        <Route path="/forgotten-password" component={ForgottenPassword}></Route>
      </Router>
    </div>
  );
}

export default App;
