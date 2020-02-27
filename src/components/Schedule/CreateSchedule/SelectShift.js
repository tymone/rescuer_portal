import React, { Component } from 'react';

class SelectShift extends Component {
  state = {
    shifts: 3
  };

  handleChange = (e) => {
    const { getShiftNumber } = this.props;
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => getShiftNumber(this.state.shifts)
    );
  };

  setNumberOfMultitudes = (team) => {
    const teamNumber = team.length;

    const multitudes = Math.floor(teamNumber / 5);
    const surplus = multitudes >= 30 ? teamNumber % 5 : 0;
    let multitudesMsg = '';

    if (multitudes <= 6) {
      multitudesMsg = '3';
    }
    if (multitudes === 7) {
      multitudesMsg = '7';
    }
    if (multitudes >= 8) {
      multitudesMsg = '4';
    }

    let msg = `Możliwe utworzenie harmonogramu w systemie ${multitudesMsg} zmianiowym. Liczba ratowników poza zastępem: ${surplus}`;

    return msg;
  };

  render() {
    const { team } = this.props;

    return (
      <div className="selectShift">
        <span>{this.setNumberOfMultitudes(team)}</span>
        <label>
          utwórz:
          <select value={this.state.shifts} name="shifts" onChange={this.handleChange}>
            <option value={3}>3 zmiany</option>
            <option value={4}>4 zmiany</option>
            <option value={7}>7 zmian</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SelectShift;
