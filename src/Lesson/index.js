import React, { Component } from 'react';

class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commands: []
    }
  }

  addCommand(command) {
    // push value to previous state
    this.setState(prevState => ({
      commands: [...prevState.commands, command]
    }));
  }

  render() {
    const { commands } = this.state;
    const { addCommandList } = this.props;
    return (
      <div id='Lesson'>
        <button onClick={() => this.addCommand('up')}>Up</button>
        <button onClick={() => this.addCommand('down')}>Down</button>
        <button onClick={() => this.addCommand('left')}>Left</button>
        <button onClick={() => this.addCommand('right')}>Right</button>
        <button onClick={() => addCommandList(commands)}>Run</button>
      </div>
    );
  }
}

export default Lesson;
