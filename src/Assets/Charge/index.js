import React, { Component } from 'react';
import '../assets.css';

class Charge extends Component {
  render() {
  const { x, y } = this.props;
  const chargeStyle = {
      gridColumnStart: x,
      gridRowStart: y
  }
  return(
    <svg style={chargeStyle} className="asset" id="charge" width="1000" height="1000" viewBox="0 0 1000 1000">
      <path d="M606.524 145.581L475.237 380.944l147.972 28.808-114.875 197.776 110.6 20.057L453.31 866.593l82.971-197.28-113.636-32.453 110.013-191.479-155.264-19.362 149.523-291.644z" className="charge"/>
    </svg>
    )
  }
}

export default Charge;
