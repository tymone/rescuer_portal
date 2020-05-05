import React, { Component } from 'react';

class OutOfWeekGroup extends Component {
  state = {
    activeInput: false,
    rescuer: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addRescuer = () => {
    const { rescuer, activeInput } = this.state;
    const { getList, list, title } = this.props;
    const newList = [...list, rescuer];
    this.setState({
      rescuer: '',
      activeInput: !activeInput,
    });
    getList(title, newList);
  };

  removeRescuer = (removeRescuer) => {
    const { list, getList, title } = this.props;
    const newList = list.filter((rescuer) => rescuer !== removeRescuer);
    getList(title, newList);
  };

  setRescuersList = (list) => {
    const { type } = this.props;
    return list.map((rescuer) => (
      <li className="rescuer" key={rescuer}>
        {rescuer}
        {type !== 'read' ? <i className="fas fa-user-minus" onClick={() => this.removeRescuer(rescuer)}></i> : null}
      </li>
    ));
  };

  titlePL = (title) => {
    switch (title) {
      case 'train':
        return 'ćwiczenia';
      case 'sick':
        return 'zwolnienie lekarskie';
      case 'course':
        return 'kurs';
      case 'leave':
        return 'urlop';
      default:
        return;
    }
  };

  render() {
    const { activeInput, rescuer } = this.state;
    const { title, list, type } = this.props;
    return (
      <li className="outOfScheduleGroup">
        <span className="title">
          {this.titlePL(title)}:
          {type !== 'read' ? (
            <i className={'fas fa-user-plus'} onClick={() => this.setState({ activeInput: !activeInput })}></i>
          ) : null}
        </span>
        <ul className="rescuers">{this.setRescuersList(list)}</ul>
        {activeInput ? (
          <>
            <input type="text" value={rescuer} name="rescuer" onChange={this.handleChange} />
            <i className={'fas fa-user-check'} onClick={this.addRescuer}></i>
          </>
        ) : null}
      </li>
    );
  }
}

export default OutOfWeekGroup;
