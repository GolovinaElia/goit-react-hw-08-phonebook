import React, { Component } from 'react';
import style from './Register.module.css';

class Register extends Component {
  state = {
    movies: [],
    query: '',
  };

  render() {
    return (
      <>
        <h1 className={style.title}>Register</h1>
      </>
    );
  }
}

export default Register;
