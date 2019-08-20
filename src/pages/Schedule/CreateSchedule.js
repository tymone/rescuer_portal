import React, { Component } from 'react';

export default class CreateSchedule extends Component {

  state = {
    schedule: [],
    outsideMultitude: '',
    outsideTrain: '',
    outsideSick: '',
    outsideCourse: '',
    outsideLeave: '',
    outsideMultitudeArr: [],
    outsideTrainArr: [],
    outsideSickArr: [],
    outsideCourseArr: [],
    outsideLeaveArr: [],
    allWeek: false,
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { dateFrom, dateTo } = this.state
    let id = this.state.schedule.length

    const newSchedule = {
      id: id,
      dateFrom: dateFrom,
      dateTo: dateTo,
      Monday: {
        shift1: {
          multitude1:
            [this.state.MondayShift1Multitude1User1, this.state.MondayShift1Multitude1User2, this.state.MondayShift1Multitude1User3, this.state.MondayShift1Multitude1User4, this.state.MondayShift1Multitude1User5],
          multitude2:
            [this.state.MondayShift1Multitude2User1, this.state.MondayShift1Multitude2User2, this.state.MondayShift1Multitude2User3, this.state.MondayShift1Multitude2User4, this.state.MondayShift1Multitude2User5],
        },
        shift2: {
          multitude1:
            [this.state.MondayShift2Multitude1User1, this.state.MondayShift2Multitude1User2, this.state.MondayShift2Multitude1User3, this.state.MondayShift2Multitude1User4, this.state.MondayShift2Multitude1User5],
          multitude2:
            [this.state.MondayShift2Multitude2User1, this.state.MondayShift2Multitude2User2, this.state.MondayShift2Multitude2User3, this.state.MondayShift2Multitude2User4, this.state.MondayShift2Multitude2User5],
        },
        shift3: {
          multitude1:
            [this.state.MondayShift3Multitude1User1, this.state.MondayShift3Multitude1User2, this.state.MondayShift3Multitude1User3, this.state.MondayShift3Multitude1User4, this.state.MondayShift3Multitude1User5],
          multitude2:
            [this.state.MondayShift3Multitude2User1, this.state.MondayShift3Multitude2User2, this.state.MondayShift3Multitude2User3, this.state.MondayShift3Multitude2User4, this.state.MondayShift3Multitude2User5],
        }
      },
      Tuesday: {
        shift1: {
          multitude1:
            [this.state.TuesdayShift1Multitude1User1, this.state.TuesdayShift1Multitude1User2, this.state.TuesdayShift1Multitude1User3, this.state.TuesdayShift1Multitude1User4, this.state.TuesdayShift1Multitude1User5],
          multitude2:
            [this.state.TuesdayShift1Multitude2User1, this.state.TuesdayShift1Multitude2User2, this.state.TuesdayShift1Multitude2User3, this.state.TuesdayShift1Multitude2User4, this.state.TuesdayShift1Multitude2User5],
        },
        shift2: {
          multitude1:
            [this.state.TuesdayShift2Multitude1User1, this.state.TuesdayShift2Multitude1User2, this.state.TuesdayShift2Multitude1User3, this.state.TuesdayShift2Multitude1User4, this.state.TuesdayShift2Multitude1User5],
          multitude2:
            [this.state.TuesdayShift2Multitude2User1, this.state.TuesdayShift2Multitude2User2, this.state.TuesdayShift2Multitude2User3, this.state.TuesdayShift2Multitude2User4, this.state.TuesdayShift2Multitude2User5],
        },
        shift3: {
          multitude1:
            [this.state.TuesdayShift3Multitude1User1, this.state.TuesdayShift3Multitude1User2, this.state.TuesdayShift3Multitude1User3, this.state.TuesdayShift3Multitude1User4, this.state.TuesdayShift3Multitude1User5],
          multitude2:
            [this.state.TuesdayShift3Multitude2User1, this.state.TuesdayShift3Multitude2User2, this.state.TuesdayShift3Multitude2User3, this.state.TuesdayShift3Multitude2User4, this.state.TuesdayShift3Multitude2User5],
        }
      },
      Wednesday: {
        shift1: {
          multitude1:
            [this.state.WednesdayShift1Multitude1User1, this.state.WednesdayShift1Multitude1User2, this.state.WednesdayShift1Multitude1User3, this.state.WednesdayShift1Multitude1User4, this.state.WednesdayShift1Multitude1User5],
          multitude2:
            [this.state.WednesdayShift1Multitude2User1, this.state.WednesdayShift1Multitude2User2, this.state.WednesdayShift1Multitude2User3, this.state.WednesdayShift1Multitude2User4, this.state.WednesdayShift1Multitude2User5],
        },
        shift2: {
          multitude1:
            [this.state.WednesdayShift2Multitude1User1, this.state.WednesdayShift2Multitude1User2, this.state.WednesdayShift2Multitude1User3, this.state.WednesdayShift2Multitude1User4, this.state.WednesdayShift2Multitude1User5],
          multitude2:
            [this.state.WednesdayShift2Multitude2User1, this.state.WednesdayShift2Multitude2User2, this.state.WednesdayShift2Multitude2User3, this.state.WednesdayShift2Multitude2User4, this.state.WednesdayShift2Multitude2User5],
        },
        shift3: {
          multitude1:
            [this.state.WednesdayShift3Multitude1User1, this.state.WednesdayShift3Multitude1User2, this.state.WednesdayShift3Multitude1User3, this.state.WednesdayShift3Multitude1User4, this.state.WednesdayShift3Multitude1User5],
          multitude2:
            [this.state.WednesdayShift3Multitude2User1, this.state.WednesdayShift3Multitude2User2, this.state.WednesdayShift3Multitude2User3, this.state.WednesdayShift3Multitude2User4, this.state.WednesdayShift3Multitude2User5],
        }
      },
      Thursday: {
        shift1: {
          multitude1:
            [this.state.ThursdayShift1Multitude1User1, this.state.ThursdayShift1Multitude1User2, this.state.ThursdayShift1Multitude1User3, this.state.ThursdayShift1Multitude1User4, this.state.ThursdayShift1Multitude1User5],
          multitude2:
            [this.state.ThursdayShift1Multitude2User1, this.state.ThursdayShift1Multitude2User2, this.state.ThursdayShift1Multitude2User3, this.state.ThursdayShift1Multitude2User4, this.state.ThursdayShift1Multitude2User5],
        },
        shift2: {
          multitude1:
            [this.state.ThursdayShift2Multitude1User1, this.state.ThursdayShift2Multitude1User2, this.state.ThursdayShift2Multitude1User3, this.state.ThursdayShift2Multitude1User4, this.state.ThursdayShift2Multitude1User5],
          multitude2:
            [this.state.ThursdayShift2Multitude2User1, this.state.ThursdayShift2Multitude2User2, this.state.ThursdayShift2Multitude2User3, this.state.ThursdayShift2Multitude2User4, this.state.ThursdayShift2Multitude2User5],
        },
        shift3: {
          multitude1:
            [this.state.ThursdayShift3Multitude1User1, this.state.ThursdayShift3Multitude1User2, this.state.ThursdayShift3Multitude1User3, this.state.ThursdayShift3Multitude1User4, this.state.ThursdayShift3Multitude1User5],
          multitude2:
            [this.state.ThursdayShift3Multitude2User1, this.state.ThursdayShift3Multitude2User2, this.state.ThursdayShift3Multitude2User3, this.state.ThursdayShift3Multitude2User4, this.state.ThursdayShift3Multitude2User5],
        }
      },
      Friday: {
        shift1: {
          multitude1:
            [this.state.FridayShift1Multitude1User1, this.state.FridayShift1Multitude1User2, this.state.FridayShift1Multitude1User3, this.state.FridayShift1Multitude1User4, this.state.FridayShift1Multitude1User5],
          multitude2:
            [this.state.FridayShift1Multitude2User1, this.state.FridayShift1Multitude2User2, this.state.FridayShift1Multitude2User3, this.state.FridayShift1Multitude2User4, this.state.FridayShift1Multitude2User5],
        },
        shift2: {
          multitude1:
            [this.state.FridayShift2Multitude1User1, this.state.FridayShift2Multitude1User2, this.state.FridayShift2Multitude1User3, this.state.FridayShift2Multitude1User4, this.state.FridayShift2Multitude1User5],
          multitude2:
            [this.state.FridayShift2Multitude2User1, this.state.FridayShift2Multitude2User2, this.state.FridayShift2Multitude2User3, this.state.FridayShift2Multitude2User4, this.state.FridayShift2Multitude2User5],
        },
        shift3: {
          multitude1:
            [this.state.FridayShift3Multitude1User1, this.state.FridayShift3Multitude1User2, this.state.FridayShift3Multitude1User3, this.state.FridayShift3Multitude1User4, this.state.FridayShift3Multitude1User5],
          multitude2:
            [this.state.FridayShift3Multitude2User1, this.state.FridayShift3Multitude2User2, this.state.FridayShift3Multitude2User3, this.state.FridayShift3Multitude2User4, this.state.FridayShift3Multitude2User5],
        }
      },
      Saturday: {
        shift1: {
          multitude1:
            [this.state.SaturdayShift1Multitude1User1, this.state.SaturdayShift1Multitude1User2, this.state.SaturdayShift1Multitude1User3, this.state.SaturdayShift1Multitude1User4, this.state.SaturdayShift1Multitude1User5],
          multitude2:
            [this.state.SaturdayShift1Multitude2User1, this.state.SaturdayShift1Multitude2User2, this.state.SaturdayShift1Multitude2User3, this.state.SaturdayShift1Multitude2User4, this.state.SaturdayShift1Multitude2User5],
        },
        shift2: {
          multitude1:
            [this.state.SaturdayShift2Multitude1User1, this.state.SaturdayShift2Multitude1User2, this.state.SaturdayShift2Multitude1User3, this.state.SaturdayShift2Multitude1User4, this.state.SaturdayShift2Multitude1User5],
          multitude2:
            [this.state.SaturdayShift2Multitude2User1, this.state.SaturdayShift2Multitude2User2, this.state.SaturdayShift2Multitude2User3, this.state.SaturdayShift2Multitude2User4, this.state.SaturdayShift2Multitude2User5],
        },
        shift3: {
          multitude1:
            [this.state.SaturdayShift3Multitude1User1, this.state.SaturdayShift3Multitude1User2, this.state.SaturdayShift3Multitude1User3, this.state.SaturdayShift3Multitude1User4, this.state.SaturdayShift3Multitude1User5],
          multitude2:
            [this.state.SaturdayShift3Multitude2User1, this.state.SaturdayShift3Multitude2User2, this.state.SaturdayShift3Multitude2User3, this.state.SaturdayShift3Multitude2User4, this.state.SaturdayShift3Multitude2User5],
        }
      },
      Sunday: {
        shift1: {
          multitude1:
            [this.state.SundayShift1Multitude1User1, this.state.SundayShift1Multitude1User2, this.state.SundayShift1Multitude1User3, this.state.SundayShift1Multitude1User4, this.state.SundayShift1Multitude1User5],
          multitude2:
            [this.state.SundayShift1Multitude2User1, this.state.SundayShift1Multitude2User2, this.state.SundayShift1Multitude2User3, this.state.SundayShift1Multitude2User4, this.state.SundayShift1Multitude2User5],
        },
        shift2: {
          multitude1:
            [this.state.SundayShift2Multitude1User1, this.state.SundayShift2Multitude1User2, this.state.SundayShift2Multitude1User3, this.state.SundayShift2Multitude1User4, this.state.SundayShift2Multitude1User5],
          multitude2:
            [this.state.SundayShift2Multitude2User1, this.state.SundayShift2Multitude2User2, this.state.SundayShift2Multitude2User3, this.state.SundayShift2Multitude2User4, this.state.SundayShift2Multitude2User5],
        },
        shift3: {
          multitude1:
            [this.state.SundayShift3Multitude1User1, this.state.SundayShift3Multitude1User2, this.state.SundayShift3Multitude1User3, this.state.SundayShift3Multitude1User4, this.state.SundayShift3Multitude1User5],
          multitude2:
            [this.state.SundayShift3Multitude2User1, this.state.SundayShift3Multitude2User2, this.state.SundayShift3Multitude2User3, this.state.SundayShift3Multitude2User4, this.state.SundayShift3Multitude2User5],
        }
      },
      outside: {
        multitude: this.state.outsideMultitudeArr,
        train: this.state.outsideTrainArr,
        sick: this.state.outsideSickArr,
        course: this.state.outsideCourseArr,
        leave: this.state.outsideLeaveArr
      }
    }
    this.setState({
      schedule: [newSchedule],
    })
    this.props.addNewSchedule(newSchedule);
  }

  multitude = (classNameMultitude, day, shift) => {
    return (
      <div className={classNameMultitude}>
        <input type='text' placeholder='nazwisko'
          name={`${day}${shift}${classNameMultitude}User1`} onChange={this.handleChange} />
        <input type='text' placeholder='nazwisko'
          name={`${day}${shift}${classNameMultitude}User2`} onChange={this.handleChange} />
        <input type='text' placeholder='nazwisko'
          name={`${day}${shift}${classNameMultitude}User3`} onChange={this.handleChange} />
        <input type='text' placeholder='nazwisko'
          name={`${day}${shift}${classNameMultitude}User4`} onChange={this.handleChange} />
        <input type='text' placeholder='nazwisko'
          name={`${day}${shift}${classNameMultitude}User5`} onChange={this.handleChange} />
      </div>
    )
  }

  shift = (classNameShift, hours, dayClassName) => {
    return (
      <div className={classNameShift}>
        <p>{hours}</p>
        {this.multitude('Multitude1', dayClassName, classNameShift)}
        {this.multitude('Multitude2', dayClassName, classNameShift)}
      </div>
    )
  }

  day = (dayClassName, dayPL, shift1 = 'Shift1', shift2 = 'Shift2', shift3 = 'Shift3', hours1 = '6:30', hours2 = '14:30', hours3 = '21:30') => {
    return (
      <div className={`day ${dayClassName}`}>
        {dayPL}
        {this.shift(shift1, hours1, dayClassName)}
        {this.shift(shift2, hours2, dayClassName)}
        {this.shift(shift3, hours3, dayClassName)}
      </div>
    )
  }

  showAddPerson = (className) => {
    let div = document.querySelector(`.underTable div div.${className} `)
    div.classList.toggle('show')
  }

  addPerson = (className) => {
    if (this.state[`${className}`].length > 0) {
      this.setState({
        [`${className}Arr`]: [...this.state[`${className}Arr`], this.state[`${className}`]],
        [`${className}`]: ''
      })
    }
    else {
      alert('Nie podano nazwiska.')
    }
  }

  removePerson = (className, i) => {
    let arr = this.state[`${className}Arr`]
    arr.splice((i), 1)
    this.setState({
      [`${className}Arr`]: arr
    })
  }

  outsidePeople = (title, people, className) => {
    return (
      <div><b><u>{title}</u></b>
        <i
          className={"fas fa-user-plus"}
          onClick={() => this.showAddPerson(className)}>
        </i>
        :
        <div className={className}>
          <input
            type="text"
            name={`${className}`}
            value={this.state[`${className}`]}
            onChange={this.handleChange} />
          <i className="fas fa-user-check" onClick={() => this.addPerson(className)}></i>
        </div>

        <ul>{people.length ? people.map((person, i) => <li key={`${className}${i}`}>{`${person}`} < i className="fas fa-user-minus" onClick={() => this.removePerson(className, i)} ></i>, </li>) : null} </ul>
      </div>)

  }

  render() {
    const { outsideMultitudeArr, outsideTrainArr, outsideSickArr, outsideCourseArr, outsideLeaveArr } = this.state
    return (
      <>
        <h1>
          Harmonogram od:
          <input name="dateFrom" onChange={this.handleChange} type="date" />
          do:
          <input name='dateTo' onChange={this.handleChange} type="date" />
        </h1>
        <div className='table'>
          {this.day('Monday', 'Poniedziałek')}
          {this.day('Tuesday', 'Wtorek')}
          {this.day('Wednesday', 'Środa')}
          {this.day('Thursday', 'Czwartek')}
          {this.day('Friday', 'Piątek')}
          {this.day('Saturday', 'Sobota')}
          {this.day('Sunday', 'Niedziela')}
          <div className='underTable'>
            {this.outsidePeople('Poza zastępem', outsideMultitudeArr, 'outsideMultitude')}
            {this.outsidePeople('Ćwiczenia', outsideTrainArr, 'outsideTrain')}
            {this.outsidePeople('L4', outsideSickArr, 'outsideSick')}
            {this.outsidePeople('Kurs', outsideCourseArr, 'outsideCourse')}
            {this.outsidePeople('Urlop', outsideLeaveArr, 'outsideLeave')}
          </div>
        </div>
        <button onClick={this.handleSubmit}>Zapisz</button>
      </>
    )
  }

}
