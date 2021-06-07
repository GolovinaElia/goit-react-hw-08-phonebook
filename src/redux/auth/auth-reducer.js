import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerRequest,
  registerSucces,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

const intialUserState = { name: null, email: null };

const user = createReducer(intialUserState, {});

const token = createReducer(null, {});

const error = createReducer(null, {
  //   [registerError]: () => alert('Something went wrong, please try again!'),
  //   [loginError]: () => alert('Something went wrong, please try again!'),
  //   [logoutError]: () => alert('Something went wrong, please try again!'),
  //   [getCurrentUserError]: () => alert('Something went wrong, please try again!'),
});

export default combineReducers({
  user,
  token,
  error,
});
