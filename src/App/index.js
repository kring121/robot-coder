import React, { Component } from 'react';
import Lesson from '../Lesson';
import Game from '../Game';
import './style.css';

class App extends Component {
  commandList(commandArr) {
    console.log(commandArr)
  }
  render() {
    return (
      <div id='App'>
        <div className='col lesson'>
          <Lesson addCommandList={this.commandList}/>
        </div>
        <div className='col game'>
          <Game test="trial"/>
        </div>
      </div>

    );
  }
}

export default App;
