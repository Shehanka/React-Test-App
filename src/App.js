import React, { Component } from 'react';

import './App.css';
import Todos from './components/Todos';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },

      {
        id: 2,
        title: 'have dinner',
        completed: false
      },

      {
        id: 3,
        title: 'Visit to course web',
        completed: false
      },
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos/>
      </div>
    );
  }
}

export default App;
