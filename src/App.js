import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos.js/index.jss/Todos.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos/>
      </div>
    );
  }
}

export default App;
