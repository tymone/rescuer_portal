import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';

class CreateSchedule extends Component {
  state = {
    shifts: '3'
  };

  setNumberOfMultitudes = team => {
    const multitudes = Math.floor(team / 5);
    const outside = multitudes >= 30 ? team % 5 : 0;
    let multitudesMsg = '';

    if (multitudes <= 6) {
      multitudesMsg = '3 zmiany';
    }
    if (multitudes === 7) {
      multitudesMsg = '7 zmian';
    }
    if (multitudes >= 8) {
      multitudesMsg = '4 zmiany';
    }

    let msg = `Sugerowana liczba zmian z uwzgędnieniem dostępności ratowników: ${multitudesMsg}. Poza zastępem dostępnych ratowników: ${outside}`;

    return msg;
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { shifts } = this.state;
    const { team } = this.props;
    const teamNumber = team.length;
    return (
      <div className="createSchedule">
        <h1>Utwórz harmonogram</h1>
        <label>{this.setNumberOfMultitudes(teamNumber)}</label>
        <label>
          utwórz:
          <select value={this.state.shifts} name="shifts" onChange={this.handleChange}>
            <option value="3">3 zmiany</option>
            <option value="4">4 zmiany</option>
            <option value="7">7 zmian</option>
          </select>
        </label>
        <Form shifts={shifts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  team: state.team.list
});

export default connect(mapStateToProps)(CreateSchedule);
