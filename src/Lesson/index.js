import React, { Component } from 'react';
import './lesson.css';

class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commands: []
    }
    this.runCommands = this.runCommands.bind(this)
  }

  addCommand(command) {
    // push value to previous state
    this.setState(prevState => ({
      commands: [...prevState.commands, command]
    }));
  }

  runCommands() {
    // add commands
    const { commands } = this.state;
    const { addCommandList } = this.props;
    addCommandList(commands);

    // reset command array
    this.setState({
      commands: []
    })
  }

  render() {
    const { commands } = this.state;
    return (
      <div id='Lesson'>
        <h1>Basics of functions</h1>
        <p>Like we just learned in the video, functions are a pretty essential part of programming languages.</p>
        <p>To get a better understanding of how functions work, lets try to direct our robot to the charger</p>
        <div id='command-row'>
          <button onClick={() => this.addCommand('up')}>Up</button>
          <button onClick={() => this.addCommand('down')}>Down</button>
          <button onClick={() => this.addCommand('left')}>Left</button>
          <button onClick={() => this.addCommand('right')}>Right</button>
        </div>
        <div id='run-row'>
          <button onClick={this.runCommands}>Run</button>
        </div>
      </div>
    );
  }
}

export default Lesson;
