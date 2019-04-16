import React, { Component } from 'react';
import Robot from '../Assets/Robot';
import Charge from '../Assets/Charge';
import Cone from '../Assets/Cone';
import Oil from '../Assets/Oil';
import './game.css'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: '',
      position: {x: 1, y: 1},
      oilPosition: [{id: 1, x: 1, y: 3}, {id: 2, x: 4, y: 4}],
      conePosition: [{id: 1, x: 2, y: 1}, {id: 2, x: 3, y: 2}, {id: 3, x: 2, y: 4}],
      chargePosition: {x: 5, y: 5}
    }
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
        robot.style.transform = `translate(${position.x * 120 - 120}px, ${position.y * 120 - 120}px)` :

        // robot fall
        robot.style.transform = `translate(${position.x * 120 - 120}px, 110vh)`;

      }, i*750 );
    }
  }

  checkMove(position) {
    // check if out of bounds
    if(position.x < 0 || position.y < 0) {
      return false
    } else if(position.x > 4 || position.y > 4) {
      return false
    } else {
      // if not out of bounds check for collision
      return this.collisionCheck(position);
    }
  }

  collisionCheck(position) {
    const { conePosition, oilPosition, chargePosition } = this.state;

    // collision ?
    let noCollision = true;

    // cone collision?
    for(let i = 0; i < conePosition.length; i++) {
      const cone = conePosition[i];

      // if collision detected noCollision is false
      if(cone.x === position.x && cone.y === position.y) {
        noCollision = false;
        break;
      }

      // no cone collision, check for oil collision
      for(let j = 0; j < oilPosition.length; j++) {
        const oil = oilPosition[j];

        // if oil collision noCollision is false
        if(oil.x === position.x && oil.y === position.y) {
          noCollision = false;
          break;
        }
      }
    }

    return noCollision
  }

  render() {
    const { chargePosition, oilPosition, conePosition } = this.state;
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
        <Robot/>
        <Charge x={chargePosition.x} y={chargePosition.y}/>
        {conePosition.map(cone => <Cone x={cone.x} y={cone.y} key={`cone${cone.id}`} />)}
        {oilPosition.map(oil => <Oil x={oil.x} y={oil.y} key={`oil${oil.id}`} />)}
      </div>
    );
  }
}

export default Game;
