import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import LoginPage from './views/LoginPage/LoginPage';
import SignupPage from './views/SignupPage/SignupPage';
import Dashboard from './views/Dashboard/Dashboard';

library.add(faUserEdit);

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LoginPage}></Route>
        <Route path="/signup" component={SignupPage}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
      </Router>
    </div>
  );
}

export default App;
