import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { login, logout, signup } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();

  window.login = login;
  window.signup = signup;
  window.logout = logout; 
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to MealTime!</h1>, root);
});

