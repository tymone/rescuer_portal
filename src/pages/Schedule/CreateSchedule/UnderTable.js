import React, { Component } from 'react';

import UnderTableForm from './UnderTableForm.js';

class UnderTable extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="underTable">
        <UnderTableForm title={'Poza zastępem'} name={'outsideMultitude'}/>
        <UnderTableForm title={'Ćwiczenia'} name={'outsideTrain'}/>
        <UnderTableForm title={'L4'} name={'outsideSick'}/>
        <UnderTableForm title={'Kurs'} name={'outsideCourse'}/>
        <UnderTableForm title={'Urlop'} name={'outsideLeave'}/>
      </div>
     );
  }
}
 
export default UnderTable;