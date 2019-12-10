import React, { Component } from 'react';

import Day from './Day'

class Week extends Component {
  render(){
    const { week } = this.props
    return(
      <div className="table">
        <Day getDay={week.Monday} day={'Poniedziałek'} />
        <Day getDay={week.Tuesday} day={'Wtorek'}/>
        <Day getDay={week.Wednesday} day={'Środa'}/>
        <Day getDay={week.Thursday} day={'Czwartek'}/>
        <Day getDay={week.Friday} day={'Piątek'}/>
        <Day getDay={week.Saturday} day={'Sobota'}/>
        <Day getDay={week.Sunday} day={'Niedziela'}/>
      </div>
    )
  }
}

export default Week; 