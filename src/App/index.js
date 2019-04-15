import React, { Component } from 'react';
import Lesson from '../Lesson';
import Game from '../Game';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commandList: []
    }
    this.createCommandList = this.createCommandList.bind(this);
  }

  createCommandList(commandArr) {
    this.setState({
      commandList: commandArr
    });
  }
  render() {
    const { commandList } = this.state;
    return (
      <div id='App'>
        <div className='col lesson'>
          <Lesson addCommandList={this.createCommandList}/>
        </div>
        <div className='col game'>
          <Game move={commandList}/>
        </div>
      </div>

    );
  }
}

export default App;
