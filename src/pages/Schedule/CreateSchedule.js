import React, { Component } from 'react';

class CreateSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFrom: '16.07.2019',
      dateTo: '22.07.2019',
      MondayShift1Multitude1User1: '',
      MondayShift1Multitude1User2: '',
      MondayShift1Multitude1User3: '',
      MondayShift1Multitude1User4: '',
      MondayShift1Multitude1User5: '',
      MondayShift1Multitude2User1: '',
      MondayShift1Multitude2User2: '',
      MondayShift1Multitude2User3: '',
      MondayShift1Multitude2User4: '',
      MondayShift1Multitude2User5: '',
      MondayShift2Multitude1User1: '',
      MondayShift2Multitude1User2: '',
      MondayShift2Multitude1User3: '',
      MondayShift2Multitude1User4: '',
      MondayShift2Multitude1User5: '',
      MondayShift2Multitude2User1: '',
      MondayShift2Multitude2User2: '',
      MondayShift2Multitude2User3: '',
      MondayShift2Multitude2User4: '',
      MondayShift2Multitude2User5: '',
      MondayShift3Multitude1User1: '',
      MondayShift3Multitude1User2: '',
      MondayShift3Multitude1User3: '',
      MondayShift3Multitude1User4: '',
      MondayShift3Multitude1User5: '',
      MondayShift3Multitude2User1: '',
      MondayShift3Multitude2User2: '',
      MondayShift3Multitude2User3: '',
      MondayShift3Multitude2User4: '',
      MondayShift3Multitude2User5: '',
      TuesdayShift1Multitude1User1: '',
      TuesdayShift1Multitude1User2: '',
      TuesdayShift1Multitude1User3: '',
      TuesdayShift1Multitude1User4: '',
      TuesdayShift1Multitude1User5: '',
      TuesdayShift1Multitude2User1: '',
      TuesdayShift1Multitude2User2: '',
      TuesdayShift1Multitude2User3: '',
      TuesdayShift1Multitude2User4: '',
      TuesdayShift1Multitude2User5: '',
      TuesdayShift2Multitude1User1: '',
      TuesdayShift2Multitude1User2: '',
      TuesdayShift2Multitude1User3: '',
      TuesdayShift2Multitude1User4: '',
      TuesdayShift2Multitude1User5: '',
      TuesdayShift2Multitude2User1: '',
      TuesdayShift2Multitude2User2: '',
      TuesdayShift2Multitude2User3: '',
      TuesdayShift2Multitude2User4: '',
      TuesdayShift2Multitude2User5: '',
      TuesdayShift3Multitude1User1: '',
      TuesdayShift3Multitude1User2: '',
      TuesdayShift3Multitude1User3: '',
      TuesdayShift3Multitude1User4: '',
      TuesdayShift3Multitude1User5: '',
      TuesdayShift3Multitude2User1: '',
      TuesdayShift3Multitude2User2: '',
      TuesdayShift3Multitude2User3: '',
      TuesdayShift3Multitude2User4: '',
      TuesdayShift3Multitude2User5: '',
      WednesdayShift1Multitude1User1: '',
      WednesdayShift1Multitude1User2: '',
      WednesdayShift1Multitude1User3: '',
      WednesdayShift1Multitude1User4: '',
      WednesdayShift1Multitude1User5: '',
      WednesdayShift1Multitude2User1: '',
      WednesdayShift1Multitude2User2: '',
      WednesdayShift1Multitude2User3: '',
      WednesdayShift1Multitude2User4: '',
      WednesdayShift1Multitude2User5: '',
      WednesdayShift2Multitude1User1: '',
      WednesdayShift2Multitude1User2: '',
      WednesdayShift2Multitude1User3: '',
      WednesdayShift2Multitude1User4: '',
      WednesdayShift2Multitude1User5: '',
      WednesdayShift2Multitude2User1: '',
      WednesdayShift2Multitude2User2: '',
      WednesdayShift2Multitude2User3: '',
      WednesdayShift2Multitude2User4: '',
      WednesdayShift2Multitude2User5: '',
      WednesdayShift3Multitude1User1: '',
      WednesdayShift3Multitude1User2: '',
      WednesdayShift3Multitude1User3: '',
      WednesdayShift3Multitude1User4: '',
      WednesdayShift3Multitude1User5: '',
      WednesdayShift3Multitude2User1: '',
      WednesdayShift3Multitude2User2: '',
      WednesdayShift3Multitude2User3: '',
      WednesdayShift3Multitude2User4: '',
      WednesdayShift3Multitude2User5: '',
      ThursdayShift1Multitude1User1: '',
      ThursdayShift1Multitude1User2: '',
      ThursdayShift1Multitude1User3: '',
      ThursdayShift1Multitude1User4: '',
      ThursdayShift1Multitude1User5: '',
      ThursdayShift1Multitude2User1: '',
      ThursdayShift1Multitude2User2: '',
      ThursdayShift1Multitude2User3: '',
      ThursdayShift1Multitude2User4: '',
      ThursdayShift1Multitude2User5: '',
      ThursdayShift2Multitude1User1: '',
      ThursdayShift2Multitude1User2: '',
      ThursdayShift2Multitude1User3: '',
      ThursdayShift2Multitude1User4: '',
      ThursdayShift2Multitude1User5: '',
      ThursdayShift2Multitude2User1: '',
      ThursdayShift2Multitude2User2: '',
      ThursdayShift2Multitude2User3: '',
      ThursdayShift2Multitude2User4: '',
      ThursdayShift2Multitude2User5: '',
      ThursdayShift3Multitude1User1: '',
      ThursdayShift3Multitude1User2: '',
      ThursdayShift3Multitude1User3: '',
      ThursdayShift3Multitude1User4: '',
      ThursdayShift3Multitude1User5: '',
      ThursdayShift3Multitude2User1: '',
      ThursdayShift3Multitude2User2: '',
      ThursdayShift3Multitude2User3: '',
      ThursdayShift3Multitude2User4: '',
      ThursdayShift3Multitude2User5: '',
      FridayShift1Multitude1User1: '',
      FridayShift1Multitude1User2: '',
      FridayShift1Multitude1User3: '',
      FridayShift1Multitude1User4: '',
      FridayShift1Multitude1User5: '',
      FridayShift1Multitude2User1: '',
      FridayShift1Multitude2User2: '',
      FridayShift1Multitude2User3: '',
      FridayShift1Multitude2User4: '',
      FridayShift1Multitude2User5: '',
      FridayShift2Multitude1User1: '',
      FridayShift2Multitude1User2: '',
      FridayShift2Multitude1User3: '',
      FridayShift2Multitude1User4: '',
      FridayShift2Multitude1User5: '',
      FridayShift2Multitude2User1: '',
      FridayShift2Multitude2User2: '',
      FridayShift2Multitude2User3: '',
      FridayShift2Multitude2User4: '',
      FridayShift2Multitude2User5: '',
      FridayShift3Multitude1User1: '',
      FridayShift3Multitude1User2: '',
      FridayShift3Multitude1User3: '',
      FridayShift3Multitude1User4: '',
      FridayShift3Multitude1User5: '',
      FridayShift3Multitude2User1: '',
      FridayShift3Multitude2User2: '',
      FridayShift3Multitude2User3: '',
      FridayShift3Multitude2User4: '',
      FridayShift3Multitude2User5: '',
      SaturdayShift1Multitude1User1: '',
      SaturdayShift1Multitude1User2: '',
      SaturdayShift1Multitude1User3: '',
      SaturdayShift1Multitude1User4: '',
      SaturdayShift1Multitude1User5: '',
      SaturdayShift1Multitude2User1: '',
      SaturdayShift1Multitude2User2: '',
      SaturdayShift1Multitude2User3: '',
      SaturdayShift1Multitude2User4: '',
      SaturdayShift1Multitude2User5: '',
      SaturdayShift2Multitude1User1: '',
      SaturdayShift2Multitude1User2: '',
      SaturdayShift2Multitude1User3: '',
      SaturdayShift2Multitude1User4: '',
      SaturdayShift2Multitude1User5: '',
      SaturdayShift2Multitude2User1: '',
      SaturdayShift2Multitude2User2: '',
      SaturdayShift2Multitude2User3: '',
      SaturdayShift2Multitude2User4: '',
      SaturdayShift2Multitude2User5: '',
      SaturdayShift3Multitude1User1: '',
      SaturdayShift3Multitude1User2: '',
      SaturdayShift3Multitude1User3: '',
      SaturdayShift3Multitude1User4: '',
      SaturdayShift3Multitude1User5: '',
      SaturdayShift3Multitude2User1: '',
      SaturdayShift3Multitude2User2: '',
      SaturdayShift3Multitude2User3: '',
      SaturdayShift3Multitude2User4: '',
      SaturdayShift3Multitude2User5: '',
      SundayShift1Multitude1User1: '',
      SundayShift1Multitude1User2: '',
      SundayShift1Multitude1User3: '',
      SundayShift1Multitude1User4: '',
      SundayShift1Multitude1User5: '',
      SundayShift1Multitude2User1: '',
      SundayShift1Multitude2User2: '',
      SundayShift1Multitude2User3: '',
      SundayShift1Multitude2User4: '',
      SundayShift1Multitude2User5: '',
      SundayShift2Multitude1User1: '',
      SundayShift2Multitude1User2: '',
      SundayShift2Multitude1User3: '',
      SundayShift2Multitude1User4: '',
      SundayShift2Multitude1User5: '',
      SundayShift2Multitude2User1: '',
      SundayShift2Multitude2User2: '',
      SundayShift2Multitude2User3: '',
      SundayShift2Multitude2User4: '',
      SundayShift2Multitude2User5: '',
      SundayShift3Multitude1User1: '',
      SundayShift3Multitude1User2: '',
      SundayShift3Multitude1User3: '',
      SundayShift3Multitude1User4: '',
      SundayShift3Multitude1User5: '',
      SundayShift3Multitude2User1: '',
      SundayShift3Multitude2User2: '',
      SundayShift3Multitude2User3: '',
      SundayShift3Multitude2User4: '',
      SundayShift3Multitude2User5: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // MondayShift1Multitude1User1
  // value={this.state.()} name={`${day}${shift.charAt(0).toUpperCase() + shift.slice(1)}${classNameMultitude.charAt(0).toUpperCase() + classNameMultitude.slice(1)}User${i}`} onChange={this.handleChange}
  multitude = (classNameMultitude, day, shift) => {
     let multitude = [1, 2, 3, 4, 5]
    return (
    multitude.map( i => <input type="text" value={`this.state.${day}${shift.charAt(0).toUpperCase() + shift.slice(1)}${classNameMultitude.charAt(0).toUpperCase() + classNameMultitude.slice(1)}User${i}`} name={`${day}${shift.charAt(0).toUpperCase() + shift.slice(1)}${classNameMultitude.charAt(0).toUpperCase() + classNameMultitude.slice(1)}User${i}`} onChange={this.handleChange}  placeholder='Nazwisko' />)
      
    
      // <div className={classNameMultitude}>
      //   <input type="text" value={''} name={`${day}${shift.charAt(0).toUpperCase() + shift.slice(1)}${classNameMultitude.charAt(0).toUpperCase() + classNameMultitude.slice(1)}User1`} onChange={this.handleChange} placeholder='Nazwisko' />
      //   <input type="text" value={''} name={`${day}${shift.charAt(0).toUpperCase() + shift.slice(1)}${classNameMultitude.charAt(0).toUpperCase() + classNameMultitude.slice(1)}User2`} onChange={this.handleChange} placeholder='Nazwisko' />
      //   <input type="text" value={''} name={`${day}${shift.charAt(0).toUpperCase() + shift.slice(1)}${classNameMultitude.charAt(0).toUpperCase() + classNameMultitude.slice(1)}User3`} onChange={this.handleChange} placeholder='Nazwisko' />
      //   <input type="text" value={''} name={`${day}${shift.charAt(0).toUpperCase() + shift.slice(1)}${classNameMultitude.charAt(0).toUpperCase() + classNameMultitude.slice(1)}User4`} onChange={this.handleChange} placeholder='Nazwisko' />
      //   <input type="text" value={''} name={`${day}${shift.charAt(0).toUpperCase() + shift.slice(1)}${classNameMultitude.charAt(0).toUpperCase() + classNameMultitude.slice(1)}User4`} onChange={this.handleChange} placeholder='Nazwisko' />
      //   {console.log(`${day}${shift.charAt(0).toUpperCase() + shift.slice(1)}${classNameMultitude.charAt(0).toUpperCase() + classNameMultitude.slice(1)}User1`)}
      // </div>
    )}

  shift = (classNameShift, hours, dayClassName) => {
    return (
      <div className={classNameShift}>
        <p>{hours}</p>
        <div className='multitude1'>
        {this.multitude('multitude1', dayClassName, classNameShift)}
        </div>
        <div className='multitude2'>
        {this.multitude('multitude2', dayClassName, classNameShift)}
        </div>
      </div>
      // <div className={classNameShift}>
      //   <p>{hours}</p>
      //   {this.multitude('multitude1', dayClassName, classNameShift)}
      //   {this.multitude('multitude2', dayClassName, classNameShift)}
      // </div>
    )
  }

  day = (dayClassName, dayPL, shift1 = 'shift1', shift2 = 'shift2', shift3 = 'shift3', hours1 = '6:30', hours2 = '14:30', hours3 = '21:30') => {
    return (
      <div className={`day ${dayClassName}`}>
        {dayPL}
        {this.shift(shift1, hours1, dayClassName)}
        {this.shift(shift2, hours2, dayClassName)}
        {this.shift(shift3, hours3, dayClassName)}

      </div>
    )
  }

  render() {
    return (
      <div className="schedule">
        <h1>
          Harmonogram od:
          <input value={this.state.dateFrom} name="dateFrom" onChange={this.onChange} type="date" />
          do:
          <input value={this.state.dateTo} name='dateTo' onChange={this.onChange} type="date" />
        </h1>
        <div className="table">
          {this.day('Monday', 'Poniedziałek')}
          {this.day('Tuesday', 'Wtorek')}
          {this.day('Wednesday', 'Środa')}
          {this.day('Thursday', 'Czwartek')}
          {this.day('Friday', 'Piątek')}
          {this.day('Saturday', 'Sobota')}
          {this.day('Sunday', 'Niedziela')}
        </div>
      </div>
    );
  }
}

export default CreateSchedule;
