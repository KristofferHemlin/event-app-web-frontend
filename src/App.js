import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserEdit,
  faSpinner,
  faInfo,
  faUsers,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'

import AppRouter from './router/AppRouter';

// State Component
import { StateProvider } from './components/StateProvider/StateProvider';

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


library.add(faUserEdit, faSpinner, faInfo, faUsers, faInfoCircle);

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
        <ToastContainer />
        <AppRouter  />
      </div>
    </StateProvider>
  );
}

export default App;
