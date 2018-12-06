import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import JsonToCSVConverter from './components/JsonToCSVConverter/JsonToCSVConverter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <JsonToCSVConverter/>
        </header>
      </div>
    );
  }
}

export default App;
