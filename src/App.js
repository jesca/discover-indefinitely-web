import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Discover Indefinitely</h2>
        </div>
        <Profile />
      </div>
    );
  }
}

export default App;
