import React, { Component } from "react";
import { connect } from "react-redux";

import UnderTableForm from "./UnderTableForm.js";

class UnderTable extends Component {
  render() {
    const employees = this.props.getUnderTableEmployee;
    console.log(this.props.getUnderTableEmployee);
    return (
      <div className="underTable">
        <UnderTableForm
          employees={employees.multitude}
          title={"Poza zastępem"}
          name={"outsideMultitude"}
        />
        <UnderTableForm
          employees={employees.train}
          title={"Ćwiczenia"}
          name={"outsideTrain"}
        />
        <UnderTableForm
          employees={employees.sick}
          title={"L4"}
          name={"outsideSick"}
        />
        <UnderTableForm
          employees={employees.course}
          title={"Kurs"}
          name={"outsideCourse"}
        />
        <UnderTableForm
          employees={employees.leave}
          title={"Urlop"}
          name={"outsideLeave"}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  schedules: state.schedules
});

export default connect(mapStateToProps)(UnderTable);
