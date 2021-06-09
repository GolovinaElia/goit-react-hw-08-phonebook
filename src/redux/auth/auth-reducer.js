import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  // registerRequest,
  registerSuccess,
  registerError,
  // loginRequest,
  loginSuccess,
  loginError,
  // logoutRequest,
  logoutSuccess,
  logoutError,
  // getCurrentUserRequest,
  // getCurrentUserSuccess,
  // getCurrentUserError,
} from './auth-actions';

const intialUserState = { name: null, email: null };

const user = createReducer(intialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => intialUserState,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
