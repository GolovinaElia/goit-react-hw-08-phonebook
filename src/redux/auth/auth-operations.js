import axios from 'axios';
import { authActions } from './auth-actions';

axios.defaults.baseURL = ' https://connections-api.herokuapp.com';

// const token = {};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    const response = axios.post('./users/signup', credentials);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};

const logIn = () => dispatch => {};

const logOut = () => dispatch => {};

const getCurrentUser = () => dispatch => {};

const authOperations = { register, logIn, logOut, getCurrentUser };
export default authOperations;
