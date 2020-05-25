import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import setDate from '../../../../helpers/setDate';

import { StyledBody } from '../../StyledTrain';

class GroupRow extends Component {
  state = {
    edit: false,
    id: '',
    osrg1: '',
    under1: '',
    ground1: '',
    osrg2: '',
    under2: '',
    ground2: '',
  };

  componentDidMount() {
    const { group } = this.props;
    const { id, osrg1, under1, ground1, osrg2, under2, ground2 } = group;
    this.setState({
      id,
      osrg1,
      under1,
      ground1,
      osrg2,
      under2,
      ground2,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleToggleEdit = () => {
    const { edit } = this.state;
    this.setState({
      edit: !edit,
    });
  };

  groupRowItem = (group) => {
    const { edit } = this.state;
    const getValue = Object.keys(group).splice(1);
    if (edit) {
      return this.getEditRowItem(getValue);
    }
    return getValue.map((value) => <li key={value}>{setDate(group[value])}</li>);
  };

  getEditRowItem = (getValue) =>
    getValue.map((value) => (
      <li key={value}>
        <input type="date" value={this.state[value]} name={value} onChange={this.handleChange} />
      </li>
    ));

  getEditedValue = () => {
    const { edit, id, osrg1, under1, ground1, osrg2, under2, ground2 } = this.state;
    const { submitGroup } = this.props;
    const newEditedValue = { id, osrg1, under1, ground1, osrg2, under2, ground2 };
    submitGroup(newEditedValue);
    this.setState({
      edit: !edit,
    });
  };

  getOptionIcon = (type) => {
    const { edit } = this.state;
    const { group, removeGroup, year } = this.props;
    switch (type) {
      case 'edit':
        return edit ? (
          <>
            <i className="fas fa-check" onClick={this.getEditedValue}></i>
            <i className="fas fa-times" onClick={this.handleToggleEdit}></i>
          </>
        ) : (
          <i className="fas fa-edit" onClick={this.handleToggleEdit}></i>
        );
      case 'create':
        return <i className="fas fa-trash-alt" onClick={() => removeGroup(group.id)}></i>;
      default:
        return (
          <Link to={`/cwiczenia/szczegoly/${year}/${group.id}`}>
            <i className="fas fa-chevron-right"></i>
          </Link>
        );
    }
  };

  render() {
    const { id } = this.state;
    const { group, type } = this.props;
    return (
      <StyledBody>
        <li>{id}</li>
        {this.groupRowItem(group)}
        <li>{this.getOptionIcon(type)}</li>
      </StyledBody>
    );
  }
}

export default GroupRow;
