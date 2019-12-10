import React from 'react';

import Day from './Day';
import Outside from './Outside';

const Week = ({ week }) => {
  const date = (weekDate) => {
    const day = new Date(weekDate).getDate()
    const month = new Date(weekDate).getMonth() + 1
    const currentWeekDate = `${day < 10 ? `0${day}`: day}.${month < 10 ? `0${month}` : month}`

    return currentWeekDate
  }

  const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, outside } = week

  return(
    <div  className="scheduleItem">
      <h1>Harmonogram na okres: {date(week.dateFrom)} - {date(week.dateTo)}</h1>
      <div className="table">
        <Day day={Monday} name='Poniedziałek'/>
        <Day day={Tuesday} name='Wtorek'/>
        <Day day={Wednesday} name='Środa'/>
        <Day day={Thursday} name='Czwartek'/>
        <Day day={Friday} name='Piątek'/>
        <Day day={Saturday} name='Sobota'/>
        <Day day={Sunday} name='Niedziela'/>
        <Outside outsideEmployee={outside} />
      </div>
    </div>
  )
}

export default Week;