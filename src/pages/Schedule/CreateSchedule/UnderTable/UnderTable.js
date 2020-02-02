import React, { Component } from 'react';

import UnderTableForm from './UnderTableForm';

class UnderTable extends Component {
  state = {
    overMultitude: [],
    train: [],
    sick: [],
    course: [],
    leave: []
  };
  getUsers = () => {
    const { getUnderTable } = this.props;
    const { overMultitude, train, sick, course, leave } = this.state;
    const outside = {
      overMultitude,
      train,
      sick,
      course,
      leave
    };
    getUnderTable(outside);
  };

  addUser = (user, name) => {
    const getArr = this.state[name];
    const newArr = [...getArr, user];

    this.setState(
      {
        [name]: newArr
      },
      () => this.getUsers()
    );
  };
  render() {
    return (
      <div className="underTable">
        <UnderTableForm addUser={this.addUser} users={this.state} title={'Poza zastępem'} name={'overMultitude'} />
        <UnderTableForm addUser={this.addUser} users={this.state} title={'Ćwiczenia'} name={'train'} />
        <UnderTableForm addUser={this.addUser} users={this.state} title={'L4'} name={'sick'} />
        <UnderTableForm addUser={this.addUser} users={this.state} title={'Kurs'} name={'course'} />
        <UnderTableForm addUser={this.addUser} users={this.state} title={'Urlop'} name={'leave'} />
      </div>
    );
  }
}

export default UnderTable;
