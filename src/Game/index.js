import React, { Component } from 'react';
import './game.css'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {x: 1, y: 1},
    }
    this.moveRight = this.moveRight.bind(this);
  }

  componentDidUpdate() {
    // recieve x and y coordinates from state
    const { position } = this.state;

    // position the robot based off the commands
    const robot = document.getElementById('robot');
    robot.style.gridColumnStart = position.x;
    robot.style.gridRowStart = position.y;
  }

  moveRight() {
    const { position } = this.state;
    this.setState({
      position: {x: position.x += 1, y: position.y}
    })
  }

  moveLeft() {
    const { position } = this.state;
    this.setState({
      position: {x: position.x -= 1, y: position.y}
    })
  }

  moveUp() {
    const { position } = this.state;
    this.setState({
      position: {x: position.x, y: position.y -= 1}
    })
  }

  moveDown() {
    const { position } = this.state;
    this.setState({
      position: {x: position.x, y: position.y += 1}
    })
  }

  render() {
    return (
      <div id='Game'>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div className='grid-plot'></div>
        <div id='robot'></div>
      </div>
    );
  }
}

export default Game;
