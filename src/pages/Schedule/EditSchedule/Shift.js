import React, { Component } from 'react';

import Multitude from './Multitude.js';

class Shift extends Component {
  multitudes = (multitude) =>{
    const getMultitude = Object.keys(multitude)
    getMultitude.splice(0,1)

    return getMultitude.map((setMultitude, i) => (
      <Multitude key={setMultitude} multitude={multitude[setMultitude]} className={`multitude${i+1}`} />
    ))
  } 

  render(){
    const getMultitude = this.props.shift
    
    return(
      <div className={this.props.shift}>
        <p>{this.props.hours}</p>
        {this.multitudes(getMultitude)}
      </div>
    )
  }
}

export default Shift;