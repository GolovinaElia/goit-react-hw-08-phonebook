import React, { Component } from 'react';
import style from './Login.module.css';

class Login extends Component {
  state = {
    movies: [],
    query: '',
  };

  render() {
    return (
      <>
        <h1 className={style.title}>Login</h1>
      </>
    );
  }
}

export default Login;
