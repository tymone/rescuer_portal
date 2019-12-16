import React, { Component } from "react";
import { connect } from "react-redux";

import UnderTableForm from "./UnderTableForm.js";

class UnderTable extends Component {
  render() {
    const {
      multitude,
      train,
      sick,
      course,
      leave
    } = this.props.getUnderTableEmployee;
    return (
      <div className="underTable">
        <UnderTableForm
          employees={multitude}
          title={"Poza zastępem"}
          name={"outsideMultitude"}
        />
        <UnderTableForm
          employees={train}
          title={"Ćwiczenia"}
          name={"outsideTrain"}
        />
        <UnderTableForm employees={sick} title={"L4"} name={"outsideSick"} />
        <UnderTableForm
          employees={course}
          title={"Kurs"}
          name={"outsideCourse"}
        />
        <UnderTableForm
          employees={leave}
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
