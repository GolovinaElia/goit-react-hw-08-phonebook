import axios from 'axios';
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

axios.defaults.baseURL = ' https://connections-api.herokuapp.com';

const token = {};

const register = credentials => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = axios.post('./users/signup', credentials);
    dispatch(registerSucces(response.data));
  } catch (error) {
    dispatch(registerError(error));
  }
};

const logIn = () => dispatch => {};

const logOut = () => dispatch => {};

const getCurrentUser = () => dispatch => {};

const authOperations = { register, logIn, logOut, getCurrentUser };
export default authOperations;
