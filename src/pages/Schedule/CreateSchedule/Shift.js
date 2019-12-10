import React, { Component } from 'react';

import Multitude from './Multitude.js';

export default class Shift extends Component {
  state ={

  }

  render() {
    const { shift, time } = this.props
    return(
      <>
        <div className={shift}>
          <p>{`${time}`}</p>
          <Multitude name={'multitude1'}/>
          <Multitude name={'multitude2'}/>
        </div>
      </>
    )
  }
}