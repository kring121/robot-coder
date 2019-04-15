import React, { Component } from 'react';
import './game.css'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {x: 1, y: 1},
    }
  }

  componentDidMount() {
    // recieve x and y coordinates from state
    const { position } = this.state;

    // position the robot based off the commands
    const robot = document.getElementById('robot');
    robot.style.gridColumnStart = position.x;
    robot.style.gridRowStart = position.y;
  }

  componentDidUpdate() {
    const moveList = this.props.move;
    this.move(moveList);
  }

  move(movesArr) {
    // recieve x and y coordinates from state
    const { position } = this.state;

    for(let i = 0; i < movesArr.length; i++) {
      if(movesArr[i] === 'up') {
        position.y -= 1
      } else if(movesArr[i] === 'down') {
        position.y += 1
      } else if(movesArr[i] === 'left') {
        position.x -= 1
      } else  {
        position.x += 1
      }
      // position the robot based off the commands
      const robot = document.getElementById('robot');
      robot.style.gridColumnStart = position.x;
      robot.style.gridRowStart = position.y;
    }
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
