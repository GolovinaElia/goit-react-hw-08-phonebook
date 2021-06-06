import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class App extends Component {
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
    );
  }
}
