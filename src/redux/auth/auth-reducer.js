import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from './auth-actions';

const intialUserState = { name: null, email: null };

const user = createReducer(intialUserState, {});

const token = createReducer(null, {});

const error = createReducer(null, {
  [authActions.registerError]: () =>
    alert('Something went wrong, please try again!'),
  [authActions.loginError]: () =>
    alert('Something went wrong, please try again!'),
  [authActions.logoutError]: () =>
    alert('Something went wrong, please try again!'),
  [authActions.getCurrentUserError]: () =>
    alert('Something went wrong, please try again!'),
});

export default combineReducers({
  user,
  token,
  error,
});
