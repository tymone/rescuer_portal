import React, { Component } from 'react';

class OutOfScheduleGroup extends Component {
  state = {
    list: [],
    rescuer: '',
    activeInput: false
  };

  componentWillMount() {
    const { details } = this.props;
    this.setState({
      list: details
    });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addRescuer = () => {
    const { rescuer, list } = this.state;
    this.setState(
      {
        list: [...list, rescuer]
      },
      this.sendGroup
    );
  };

  removeRescuer = (removeRescuer) => {
    const { list } = this.state;
    const newList = list.filter((rescuer) => rescuer !== removeRescuer);
    this.setState(
      {
        list: newList
      },
      this.sendGroup
    );
  };

  sendGroup = () => {
    const { title, getOutOfSchedule } = this.props;
    const { list } = this.state;
    const newList = {
      title,
      list
    };
    getOutOfSchedule(newList);
  };

  setRescuersList = (list) => {
    const { type } = this.props;
    return list.map((rescuer) => (
      <li className="rescuer" key={rescuer}>
        {type === 'update' ? (
          <>
            {rescuer}
            <i className="fas fa-user-minus" onClick={() => this.removeRescuer(rescuer)}></i>
          </>
        ) : (
          rescuer
        )}
      </li>
    ));
  };

  translateTitle = (title) => {
    let titlePL;
    switch (title) {
      case 'train':
        titlePL = 'ćwiczenia';
        break;
      case 'sick':
        titlePL = 'zwolnienie lekarskie';
        break;
      case 'course':
        titlePL = 'kurs';
        break;
      case 'leave':
        titlePL = 'urlop';
        break;
      default:
        return;
    }
    return titlePL;
  };

  handleActiveInput = () => {
    const { activeInput } = this.state;
    this.setState({
      activeInput: !activeInput
    });
  };
  render() {
    const { list, activeInput } = this.state;
    const { title, type } = this.props;
    return (
      <li className="outOfScheduleGroup">
        <span className="title">
          {this.translateTitle(title)}:
          {type === 'create' || 'update' ? <i className={'fas fa-user-plus'} onClick={this.handleActiveInput}></i> : null}
        </span>
        <ul className="rescuers">{this.setRescuersList(list)}</ul>
        {activeInput ? (
          <>
            <input type="text" value={this.state.rescuer} name="rescuer" onChange={this.handleChange} />
            <i className={'fas fa-user-check'} onClick={this.addRescuer}></i>
          </>
        ) : null}
      </li>
    );
  }
}

export default OutOfScheduleGroup;
