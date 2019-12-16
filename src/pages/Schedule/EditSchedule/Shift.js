import React, { Component } from "react";

import Multitude from "./Multitude.js";

class Shift extends Component {
  multitudes = multitude => {
    const getMultitude = Object.keys(multitude);
    getMultitude.splice(0, 1);

    return getMultitude.map((setMultitude, i) => (
      <Multitude
        key={setMultitude}
        multitude={multitude[setMultitude]}
        className={`multitude${i + 1}`}
      />
    ));
  };

  render() {
    const { shift, hours } = this.props;

    return (
      <div className={shift}>
        <p>{hours}</p>
        {this.multitudes(shift)}
      </div>
    );
  }
}

export default Shift;
