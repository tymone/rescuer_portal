import React, { Component } from 'react';
import { connect } from 'react-redux';

import UnderTableForm from './UnderTableForm.js';

class UnderTable extends Component {

  render(){
    return(
      <div className="underTable">
        <UnderTableForm title={'Poza zastępem'} name={'outsideMultitude'}/>
        <UnderTableForm title={'Ćwiczenia'} name={'outsideTrain'}/>
        <UnderTableForm title={'L4'} name={'outsideSick'}/>
        <UnderTableForm title={'Kurs'} name={'outsideCourse'}/>
        <UnderTableForm title={'Urlop'} name={'outsideLeave'}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  schedules: state.schedules
})

export default connect(mapStateToProps)(UnderTable);