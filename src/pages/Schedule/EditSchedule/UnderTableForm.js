import React, { Component } from "react";

import { addNewEmployee } from "./helpers/index";

class UnderTableForm extends Component {
  state = {
    employees: [],
    title: "",
    name: "",
    rescuer: ""
  };

  componentWillMount() {
    const { title, name, employees } = this.props;
    this.setState({
      employees,
      title,
      name
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  saveRescuer = () => {
    const { rescuer, employees, name } = this.state;
    const { getUnderTable } = this.props;
    employees.push(rescuer);
    this.setState(
      {
        employees,
        rescuer: ""
      },
      () => getUnderTable(employees, name)
    );
  };

  removeEmployee = person => {
    const { employees, name } = this.state;
    const { getUnderTable } = this.props;
    const newEmployees = employees.filter(rescuer => rescuer !== person);
    getUnderTable(newEmployees, name);
    this.setState({
      employees: newEmployees
    });
  };

  usersList = employees => {
    if (employees.length) {
      return employees.map(person => (
        <li key={person}>
          {person}
          <i
            className="fas fa-user-minus"
            onClick={() => this.removeEmployee(person)}
          ></i>
        </li>
      ));
    } else {
      return "---";
    }
  };

  render() {
    const { title, name, employees, user } = this.state;
    return (
      <div className="group">
        <span>{title}</span>
        <i
          className={"fas fa-user-plus"}
          onClick={() => addNewEmployee(name)}
        ></i>
        :<ul>{this.usersList(employees)}</ul>
        <div className={name}>
          <input
            type="text"
            name="rescuer"
            value={user}
            onChange={this.handleChange}
          />
          <i
            className={"fas fa-user-check"}
            onClick={() => this.saveRescuer()}
          ></i>
        </div>
      </div>
    );
  }
}

export default UnderTableForm;
