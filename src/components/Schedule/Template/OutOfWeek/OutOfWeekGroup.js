import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyledOutOfWeekGroup,
  StyledTitle,
  StyledRescuers,
  StyledRescuer,
  StyledButton,
  StyledAddRescuerContainer,
  StyledInput,
} from './StyledOutOfWeek';

class OutOfWeekGroup extends Component {
  state = {
    loaded: false,
    addRescuer: false,
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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addRescuer = () => {
    const { rescuer, addRescuer, group } = this.state;
    const { getList, title } = this.props;
    const newList = [...group, rescuer];
    getList(newList, title);
    this.setState({
      rescuer: '',
      addRescuer: !addRescuer,
    });
  };

  removeRescuer = (removeRescuer) => {
    const { group } = this.state;
    const { getList, title } = this.props;
    const newList = group.filter((rescuer) => rescuer !== removeRescuer);
    getList(newList, title);
  };

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
        return ' --- ';
    }
  };

  toggle = () => {
    const { addRescuer } = this.state;
    this.setState({
      addRescuer: !addRescuer,
    });
  };

  render() {
    const { addRescuer, rescuer, loaded, group } = this.state;
    const { title, type } = this.props;
    return (
      <StyledOutOfWeekGroup>
        <StyledTitle>{`${this.titlePL(title)}:`}</StyledTitle>
        <StyledRescuers>{loaded ? this.setRescuersList(group) : null}</StyledRescuers>
        {type !== 'read' ? (
          <StyledAddRescuerContainer>
            <StyledButton onClick={rescuer ? this.addRescuer : this.toggle}>
              {rescuer ? 'zapisz' : 'dodaj'}
            </StyledButton>
            {addRescuer ? (
              <StyledInput
                type="text"
                name="rescuer"
                value={rescuer}
                onChange={this.handleChange}
              />
            ) : null}
          </StyledAddRescuerContainer>
        ) : null}
      </StyledOutOfWeekGroup>
    );
  }
}

OutOfWeekGroup.propTypes = {
  list: PropTypes.array,
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  getList: PropTypes.func,
};

OutOfWeekGroup.defaultProps = {
  title: '---',
};

export default OutOfWeekGroup;
