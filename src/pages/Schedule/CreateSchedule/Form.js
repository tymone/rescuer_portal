import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import { Redirect } from 'react-router';

import Table from './Week/Table';
import UnderTable from './UnderTable/UnderTable';

class Form extends Component {
  state = {
    redirect: false,
    id: '',
    dateFrom: '',
    dateTo: '',
    Monday: {
      multitude1: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude2: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude3: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude4: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude5: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude6: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      }
    },
    Tuesday: {
      multitude1: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude2: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude3: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude4: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude5: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude6: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      }
    },
    Wednesday: {
      multitude1: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude2: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude3: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude4: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude5: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude6: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      }
    },
    Thursday: {
      multitude1: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude2: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude3: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude4: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude5: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude6: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      }
    },
    Friday: {
      multitude1: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude2: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude3: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude4: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude5: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude6: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      }
    },
    Saturday: {
      multitude1: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude2: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude3: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude4: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude5: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude6: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      }
    },
    Sunday: {
      multitude1: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude2: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude3: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude4: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude5: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      },
      multitude6: {
        time: '',
        multitude: ['---', '---', '---', '---', '---']
      }
    },
    outside: {
      overMultitude: [],
      train: [],
      sick: [],
      course: [],
      leave: []
    }
  };

  componentWillMount() {
    let { id } = this.props;
    this.setState({
      id: ++id
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getSchedule = newSchedule => {
    const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = newSchedule;
    this.setState({
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday
    });
  };

  getUnderTable = outside => {
    this.setState({
      outside
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { add } = this.props;
    const { redirect } = this.state;

    add(this.state);
    this.setState({
      redirect: !redirect
    });
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/harmonogram" />;
    }
    return (
      <div className="schedule">
        <span>Harmonogram od:</span>
        <input name="dateFrom" onChange={this.handleChange} type="date" required />
        <span>do:</span>
        <input name="dateTo" onChange={this.handleChange} type="date" required />
        <Table getSchedule={this.getSchedule} />
        <UnderTable getUnderTable={this.getUnderTable} />
        <button onClick={this.handleSubmit}>Zapisz</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  id: state.schedules.counter
});

const mapDispatchToProps = dispatch => ({
  add: newSchedule => dispatch(actions.add(newSchedule))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
