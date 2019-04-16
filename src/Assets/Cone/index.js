import React, { Component } from 'react';
import '../assets.css';

class Cone extends Component {
  render() {
  const { x, y } = this.props;
  const coneStyle = {
      gridColumnStart: x,
      gridRowStart: y
  }
  return(
    <svg style={coneStyle} className="asset cone" width="1000" height="1000" viewBox="0 0 1000 1000">
      <path d="M676.5 779.013H327.776c-16.213 0-28.277-27.091-18.791-53.862C316.579 703.694 469.885 274.9 483 238.3c8.615-24.035 29.153-23.63 37.776 0 9.617 26.344 163.7 456.774 174.409 487.945 7.847 22.829-.826 52.768-18.685 52.768z" className="cone-cls1"/>
      <path id="Rounded_Rectangle_1" d="M287 728.87h426.877a10 10 0 0 1 10 10V769a10 10 0 0 1-10 10H287a10 10 0 0 1-10-10v-30.13a10 10 0 0 1 10-10z" className="cone-cls-2"/>
    </svg>
    )
  }
}

export default Cone;
