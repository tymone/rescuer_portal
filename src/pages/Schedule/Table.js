import React from 'react';

const Table = (props) => {
  const week = props.schedule.map((week, i) => (
    <div key={i} className="schedule">
      <h1> Harmonogram na okres: {week.dateFrom} - {week.dateTo}</h1>
      <div className='table'>
        <div className="day monday">
          Poniedziałek
        <div className="shift1">
            <p>6:30</p>
            <div className="multitude1">
              {week.Monday.shift1.multitude1.map((user, i) => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Monday.shift1.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
          <div className="shift2">
            <p>14:00</p>
            <div className="multitude1">
              {week.Monday.shift2.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Monday.shift2.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
          <div className="shift3">
            <p>21:30</p>
            <div className="multitude1">
              {week.Monday.shift3.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Monday.shift3.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
        </div>
        <div className="day tuesday">
          Wtorek
        <div className="shift1">
            <p>6:30</p>
            <div className="multitude1">
              {week.Tuesday.shift1.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Tuesday.shift1.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
          <div className="shift2">
            <p>14:00</p>
            <div className="multitude1">
              {week.Tuesday.shift2.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Tuesday.shift2.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
          <div className="shift3">
            <p>21:30</p>
            <div className="multitude1">
              {week.Tuesday.shift3.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Tuesday.shift3.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
        </div>
        <div className="day wednesday">
          Środa
        <div className="shift1">
            <p>6:30</p>
            <div className="multitude1">
              {week.Wednesday.shift1.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Wednesday.shift1.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
          <div className="shift2">
            <p>14:00</p>
            <div className="multitude1">
              {week.Wednesday.shift2.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Wednesday.shift2.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
          <div className="shift3">
            <p>21:30</p>
            <div className="multitude1">
              {week.Wednesday.shift3.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Wednesday.shift3.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
        </div>
        <div className="day thursday">
          Czwartek
        <div className="shift1">
            <p>6:30</p>
            <div className="multitude1">
              {week.Thursday.shift1.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Thursday.shift1.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
          <div className="shift2">
            <p>14:00</p>
            <div className="multitude1">
              {week.Thursday.shift2.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Thursday.shift2.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
          <div className="shift3">
            <p>21:30</p>
            <div className="multitude1">
              {week.Thursday.shift3.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Thursday.shift3.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
        </div>
        <div className="day friday">
          Piątek
        <div className="shift1">
            <p>6:30</p>
            <div className="multitude1">
              {week.Friday.shift1.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Friday.shift1.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
          <div className="shift2">
            <p>14:00</p>
            <div className="multitude1">
              {week.Friday.shift2.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Friday.shift2.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
          <div className="shift3">
            <p>21:30</p>
            <div className="multitude1">
              {week.Friday.shift3.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Friday.shift3.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
        </div>
        <div className="day saturday">
          Sobota
        <div className="shift1">
            <p>6:30</p>
            <div className="multitude1">
              {week.Saturday.shift1.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Saturday.shift1.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
          <div className="shift2">
            <p>14:00</p>
            <div className="multitude1">
              {week.Saturday.shift2.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Saturday.shift2.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
          <div className="shift3">
            <p>21:30</p>
            <div className="multitude1">
              {week.Saturday.shift3.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Saturday.shift3.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
        </div>
        <div className="day sunday">
          Niedziela
        <div className="shift1">
            <p>6:30</p>
            <div className="multitude1">
              {week.Sunday.shift1.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Sunday.shift1.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
          <div className="shift2">
            <p>14:00</p>
            <div className="multitude1">
              {week.Sunday.shift2.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Sunday.shift2.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
          <div className="shift3">
            <p>21:30</p>
            <div className="multitude1">
              {week.Sunday.shift3.multitude1.map(user => <p key={i}>{user}</p>)}
            </div>
            <div className="multitude2">
              {week.Sunday.shift3.multitude2.map(user => <p key={i}>{user}</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  ))

  return (
    <>
      {week}
    </>
  )
}

export default Table;