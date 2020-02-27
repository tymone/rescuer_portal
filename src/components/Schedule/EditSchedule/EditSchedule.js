import React, { Component } from 'react';
import { connect } from 'react-redux';

import UpdateForm from '../Template/UpdateForm';

class EditSchedule extends Component {
  state = {
    schedule: {}
  };

  componentWillMount() {
    const { match, schedules } = this.props;
    const id = match.params.id;
    const schedule = schedules.find((schedule) => schedule.id === Number(id));
    this.setState({
      schedule
    });
  }

  getDate = (from, to) => {
    this.setState((prevState) => ({
      schedule: {
        ...prevState.schedule,
        date: {
          from,
          to
        }
      }
    }));
  };

  getSchedule = (updateSchedule) => {
    const { day, multitudeName, time, multitude } = updateSchedule;

    this.setState((prevState) => ({
      schedule: {
        ...prevState.schedule,
        week: {
          ...prevState.schedule.week,
          [day]: {
            ...prevState.schedule.week[day],
            [multitudeName]: {
              time,
              multitude
            }
          }
        }
      }
    }));
  };

  handleSubmit = () => {};

  render() {
    const { schedule } = this.state;
    return <UpdateForm schedule={schedule} type={'update'} />;
  }
}
const mapStateToProps = (state) => ({
  schedules: state.schedules.list
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EditSchedule);
