import React, { Component } from "react";

class UnderTableForm extends Component {
  state = {};

  setNewEmployee = person => {
    console.log(`add enew employee ${person}`);
  };

  removeEmployee = person => {
    console.log(`remove employee ${person}`);
  };
  render() {
    const { title, name, employees } = this.props;
    return (
      <div>
        <b>
          <u>{title}</u>
        </b>
        <i
          className={"fas fa-user-plus"}
          onClick={() => this.setNewEmployee()}
        ></i>
        :
        <div className={name}>
          <input type="text" />
          <i className={"fas fa-user-check"}></i>
        </div>
        <ul>
          {employees.length
            ? employees.map(person => (
                <li key={person}>
                  {person}{" "}
                  <i
                    className="fas fa-user-minus"
                    onClick={() => this.removeEmployee(person)}
                  ></i>
                </li>
              ))
            : `---`}
        </ul>
      </div>
    );
  }
}

export default UnderTableForm;
