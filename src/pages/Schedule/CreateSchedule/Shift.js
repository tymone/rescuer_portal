import React, { Component } from "react";

import Multitude from "./Multitude.js";

export default class Shift extends Component {
  state = {
    multitude1: [],
    multitude2: []
  };

  getMultitude = (name, multitude) => {
    this.setState({
      [name]: multitude
    });

    const { shift, getShift } = this.props;
    const shiftValue = this.state;
    getShift(shift, shiftValue);
  };

  render() {
    const { shift, time } = this.props;
    return (
      <>
        <div className={shift}>
          <p>{`${time}`}</p>
          <Multitude getMultitude={this.getMultitude} name={"multitude1"} />
          <Multitude getMultitude={this.getMultitude} name={"multitude2"} />
        </div>
      </>
    );
  }
}
