import React, { Component } from 'react';

class AddGroup extends Component {
  state = {
    osrg1: '',
    under1: '',
    ground1: '',
    osrg2: '',
    under2: '',
    ground2: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  add = () => {
    const { osrg1, under1, ground1, osrg2, under2, ground2 } = this.state;
    const { getGroup } = this.props;
    const newGroup = {
      osrg1,
      under1,
      ground1,
      osrg2,
      under2,
      ground2
    };
    getGroup(newGroup);

    this.setState({
      osrg1: '',
      under1: '',
      ground1: '',
      osrg2: '',
      under2: '',
      ground2: ''
    });
  };

  render() {
    const { osrg1, under1, ground1, osrg2, under2, ground2 } = this.state;
    const { number } = this.props;
    return (
      <div className="addRow">
        <ul>
          <li>{number}</li>
          <li>
            <input type="date" value={osrg1} name="osrg1" onChange={this.handleChange} />
          </li>
          <li>
            <input type="date" value={under1} name="under1" onChange={this.handleChange} />
          </li>
          <li>
            <input type="date" value={ground1} name="ground1" onChange={this.handleChange} />
          </li>
          <li>
            <input type="date" value={osrg2} name="osrg2" onChange={this.handleChange} />
          </li>
          <li>
            <input type="date" value={under2} name="under2" onChange={this.handleChange} />
          </li>
          <li>
            <input type="date" value={ground2} name="ground2" onChange={this.handleChange} />
          </li>
          <li>
            <i className="fas fa-check" onClick={this.add}></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default AddGroup;
