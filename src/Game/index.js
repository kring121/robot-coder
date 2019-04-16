import React, { Component } from 'react';
import Robot from '../Assets';
import './game.css'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: '',
      position: {x: 0, y: 0},
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
    const robot = document.getElementById('robot');

    for(let i = 0; i < movesArr.length; i++) {
      setTimeout(() => {

        if(movesArr[i] === 'up') {
          position.y -= 1
          // console.log(position)
        } else if(movesArr[i] === 'down') {
          position.y += 1
          // console.log(position)
        } else if(movesArr[i] === 'left') {
          position.x -= 1
          // console.log(position)
        } else  {
          position.x += 1
          // console.log(position)
        }

        this.checkMove(position) ?
        // position the robot based off the commands
        robot.style.transform = `translate(${position.x * 120}px, ${position.y * 120}px)` :

        // robot fall
        robot.style.transform = `translateY(110vh)`;

      }, i*750 );
    }
  }

  checkMove(position) {
    if(position.x < 0 || position.y < 0) {
      return false
    } else if(position.x > 4 || position.y > 4) {
      return false
    } else {
      return true
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
        <Robot id='robot'/>
      </div>
    );
  }
}

export default Game;
