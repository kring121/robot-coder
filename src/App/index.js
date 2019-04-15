import React, { Component } from 'react';
import Lesson from '../Lesson';
import Game from '../Game';
import './style.css';

class App extends Component {
  render() {
    return (
      <div id='App'>
        <div className='col lesson'>
          <Lesson/>
        </div>
        <div className='col game'>
          <Game/>
        </div>
      </div>

    );
  }
}

export default App;
