import React, { Component } from 'react';

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
    return (
      <div id='Lesson'>
        <button onClick={() => this.addCommand('up')}>Up</button>
        <button onClick={() => this.addCommand('down')}>Down</button>
        <button onClick={() => this.addCommand('left')}>Left</button>
        <button onClick={() => this.addCommand('right')}>Right</button>
        <button onClick={this.runCommands}>Run</button>
      </div>
    );
  }
}

export default Lesson;
