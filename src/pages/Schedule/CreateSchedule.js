import React from 'react';

const CreateSchedule = (props) => {

  let multitude = (classNameMultitude, day, shift) => {
    return (
      <div className={classNameMultitude}>
        <input type="text" name={`${day}${shift.charAt(0).toUpperCase() + shift.slice(1)}${classNameMultitude.charAt(0).toUpperCase() + classNameMultitude.slice(1)}User1`} onChange={props.handleChange} placeholder='Nazwisko' />
        <input type="text" name={`${day}${shift.charAt(0).toUpperCase() + shift.slice(1)}${classNameMultitude.charAt(0).toUpperCase() + classNameMultitude.slice(1)}User2`} onChange={props.handleChange} placeholder='Nazwisko' />
        <input type="text" name={`${day}${shift.charAt(0).toUpperCase() + shift.slice(1)}${classNameMultitude.charAt(0).toUpperCase() + classNameMultitude.slice(1)}User3`} onChange={props.handleChange} placeholder='Nazwisko' />
        <input type="text" name={`${day}${shift.charAt(0).toUpperCase() + shift.slice(1)}${classNameMultitude.charAt(0).toUpperCase() + classNameMultitude.slice(1)}User4`} onChange={props.handleChange} placeholder='Nazwisko' />
        <input type="text" name={`${day}${shift.charAt(0).toUpperCase() + shift.slice(1)}${classNameMultitude.charAt(0).toUpperCase() + classNameMultitude.slice(1)}User5`} onChange={props.handleChange} placeholder='Nazwisko' />
      </div>
    )
  }

  let shift = (classNameShift, hours, dayClassName) => {
    return (
      <div className={classNameShift}>
        <p>{hours}</p>
        {multitude('multitude1', dayClassName, classNameShift)}
        {multitude('multitude2', dayClassName, classNameShift)}
      </div>
    )
  }

  let day = (dayClassName, dayPL, shift1 = 'shift1', shift2 = 'shift2', shift3 = 'shift3', hours1 = '6:30', hours2 = '14:30', hours3 = '21:30') => {
    return (
      <div className={`day ${dayClassName}`}>
        {dayPL}
        {shift(shift1, hours1, dayClassName)}
        {shift(shift2, hours2, dayClassName)}
        {shift(shift3, hours3, dayClassName)}
      </div>
    )
  }

  return (
    <div className='table'>
      <h1>
        Harmonogram od:
          <input value={props.dateFrom} name="dateFrom" onChange={props.handleChange} type="date" />
        do:
          <input value={props.dateTo} name='dateTo' onChange={props.handleChange} type="date" />
      </h1>
      {day('Monday', 'Poniedziałek')}
      {day('Tuesday', 'Wtorek')}
      {day('Wednesday', 'Środa')}
      {day('Thursday', 'Czwartek')}
      {day('Friday', 'Piątek')}
      {day('Saturday', 'Sobota')}
      {day('Sunday', 'Niedziela')}
      <button onClick={props.handleSubmit}>Zapisz</button>
    </div>
  );

}

export default CreateSchedule;
