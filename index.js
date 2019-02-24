import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import configureStore from './store/configureStore';
import initialReduxState from './constants/initialState';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import App from './components/App';
import  { fetchAllPosts } from './actions/posts';
import { setCurrentUser, logoutUser } from './actions/auth';
//import { utimes } from 'fs';
//import './shared/crash';
//import './shared/service-worker';
//import './shared/vendor';
require('dotenv').config();

// Create the Redux store
const store = configureStore(initialReduxState);

// The current state login or logout
if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  // If login dispay all posts fetched from database
  store.dispatch(fetchAllPosts());

  const currentTime = Date.now() / 1000;
  
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
    document.getElementById('root')
);