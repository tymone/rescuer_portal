import React, { Component } from "react";

import UnderTableForm from "./UnderTableForm";

class UnderTable extends Component {
  state = {
    multitude: [],
    train: [],
    sick: [],
    course: [],
    leave: []
  };
  getUsers = () => {
    const { getUnderTable } = this.props;
    const { multitude, train, sick, course, leave } = this.state;
    const outside = {
      multitude,
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
        <UnderTableForm
          addUser={this.addUser}
          users={this.state}
          title={"Poza zastępem"}
          name={"multitude"}
        />
        <UnderTableForm
          addUser={this.addUser}
          users={this.state}
          title={"Ćwiczenia"}
          name={"train"}
        />
        <UnderTableForm
          addUser={this.addUser}
          users={this.state}
          title={"L4"}
          name={"sick"}
        />
        <UnderTableForm
          addUser={this.addUser}
          users={this.state}
          title={"Kurs"}
          name={"course"}
        />
        <UnderTableForm
          addUser={this.addUser}
          users={this.state}
          title={"Urlop"}
          name={"leave"}
        />
      </div>
    );
  }
}

export default UnderTable;
