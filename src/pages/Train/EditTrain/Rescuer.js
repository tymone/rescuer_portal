import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../Team/duck/actions';

class Rescuer extends Component {
  state = {
    osrg1: '',
    under1: '',
    ground1: '',
    osrg2: '',
    under2: '',
    ground2: ''
  };

  componentDidMount() {
    const { osrg1, under1, ground1, osrg2, under2, ground2 } = this.props.rescuer.included;
    this.setState({
      osrg1,
      under1,
      ground1,
      osrg2,
      under2,
      ground2
    });
  }

  handleChange = (name) => {
    this.setState({
      [name]: !this.state[`${name}`]
    });
  };

  handleUpdate = () => {
    const { osrg1, under1, ground1, osrg2, under2, ground2 } = this.state;
    const { rescuer, update } = this.props;
    const updatedRescuer = rescuer;
    updatedRescuer.included.osrg1 = osrg1;
    updatedRescuer.included.under1 = under1;
    updatedRescuer.included.ground1 = ground1;
    updatedRescuer.included.osrg2 = osrg2;
    updatedRescuer.included.under2 = under2;
    updatedRescuer.included.ground2 = ground2;
    update(updatedRescuer);
  };

  render() {
    const { osrg1, under1, ground1, osrg2, under2, ground2 } = this.state;
    const { rescuer } = this.props;
    const check = <i className="fas fa-check" style={{ color: 'green' }}></i>;
    const uncheck = <i className="fas fa-times" style={{ color: 'red' }}></i>;

    return (
      <ul key={rescuer.id}>
        <li>{rescuer.name}</li>
        <li>{rescuer.surname}</li>
        <li onClick={() => this.handleChange('osrg1')}>{osrg1 ? check : uncheck}</li>
        <li onClick={() => this.handleChange('under1')}>{under1 ? check : uncheck}</li>
        <li onClick={() => this.handleChange('ground1')}>{ground1 ? check : uncheck}</li>
        <li onClick={() => this.handleChange('osrg2')}>{osrg2 ? check : uncheck}</li>
        <li onClick={() => this.handleChange('under2')}>{under2 ? check : uncheck}</li>
        <li onClick={() => this.handleChange('ground2')}>{ground2 ? check : uncheck}</li>
        <li>
          <i className="fas fa-check" onClick={this.handleUpdate}></i>
        </li>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  update: (rescuer) => dispatch(actions.update(rescuer))
});
export default connect(null, mapDispatchToProps)(Rescuer);
