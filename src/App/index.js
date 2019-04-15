import React, { Component } from 'react';
import Lesson from '../Lesson';
import Game from '../Game';

class App extends Component {
  render() {
    return (
      <div id='App'>
        <h1>Stuff</h1>
        <Lesson/>
        <Game/>
      </div>

    );
  }
}

export default App;
