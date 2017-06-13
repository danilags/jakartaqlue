import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ width: '100%', position: 'absolute' }}>
        <Home />
      </div>
    );
  }
}

export default App;
