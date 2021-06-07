import React, { Component } from 'react';
import style from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  render() {
    return (
      <>
        <h1 className={style.title}>Phonebook😉</h1>
      </>
    );
  }
}
export default HomePage;
