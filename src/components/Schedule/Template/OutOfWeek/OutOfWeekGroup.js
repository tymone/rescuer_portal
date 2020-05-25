import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyledOutOfWeekGroup,
  StyledTitle,
  StyledRescuers,
  StyledRescuer,
} from './StyledOutOfWeek';

class OutOfWeekGroup extends Component {
  state = {
    loaded: false,
    activeInput: false,
    group: [],
    rescuer: '',
  };

  componentDidUpdate(prevProps) {
    const { list } = this.props;
    if (this.props !== prevProps) {
      this.setState({
        loaded: true,
        group: list,
      });
    }
  }
  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // addRescuer = () => {
  //   const { rescuer, activeInput } = this.state;
  //   const { getList, list, title } = this.props;
  //   const newList = [...list, rescuer];
  //   this.setState({
  //     rescuer: '',
  //     activeInput: !activeInput,
  //   });
  //   getList(title, newList);
  // };

  // removeRescuer = (removeRescuer) => {
  //   const { list, getList, title } = this.props;
  //   const newList = list.filter((rescuer) => rescuer !== removeRescuer);
  //   getList(title, newList);
  // };

  setRescuersList = (list) => {
    const { type } = this.props;
    return list.map((rescuer) => (
      <StyledRescuer key={rescuer}>
        {rescuer}
        {type !== 'read' ? (
          <i className="fas fa-user-minus" onClick={() => this.removeRescuer(rescuer)} />
        ) : null}
      </StyledRescuer>
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
    }
  };

  render() {
    const { activeInput, rescuer, loaded, group } = this.state;
    const { title } = this.props;
    return (
      <StyledOutOfWeekGroup>
        <StyledTitle>
          {`${this.titlePL(title)}:`}
          {/* {type !== 'read' ? (
            <i
              className="fas fa-user-plus"
              onClick={() => this.setState({ activeInput: !activeInput })}
            />
          ) : null} */}
        </StyledTitle>
        <StyledRescuers>{loaded ? this.setRescuersList(group) : null}</StyledRescuers>
        {activeInput ? (
          <>
            <input type="text" value={rescuer} name="rescuer" onChange={this.handleChange} />
            <i className="fas fa-user-check" onClick={this.addRescuer} />
          </>
        ) : null}
      </StyledOutOfWeekGroup>
    );
  }
}

OutOfWeekGroup.propTypes = {
  list: PropTypes.array,
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
};

OutOfWeekGroup.defaultProps = {
  title: '---',
};

export default OutOfWeekGroup;
