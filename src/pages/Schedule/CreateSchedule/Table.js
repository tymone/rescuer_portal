import React, { Component } from 'react';

import Day from './Day.js';

export default class Table extends Component {
  state ={
  }

  render(){
    return(
      <div className="table">
        <Day day={'Monday'} dayPl={'Poniedziałek'}/>
        <Day day={'Tuesday'} dayPl={'Wtorek'}/>
        <Day day={'Wednesday'} dayPl={'Środa'}/>
        <Day day={'Thursday'} dayPl={'Czwartek'}/>
        <Day day={'Friday'} dayPl={'Piątek'}/>
        <Day day={'Saturday'} dayPl={'Sobota'}/>
        <Day day={'Sunday'} dayPl={'Niedziela'}/>
        
      </div>
    )
  }
}