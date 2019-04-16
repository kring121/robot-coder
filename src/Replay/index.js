import React, { Component } from 'react';
class Replay extends Component {
  render() {
  return(
    <div id='Replay'>
      <h1>Replay?</h1>
      <button onClick={() => window.location.reload()}>Yes</button>
    </div>
    )
  }
}

export default Replay;
