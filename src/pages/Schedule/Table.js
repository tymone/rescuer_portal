import React from 'react';

import '../../styles/style.css';

const Table = props => {
  const multitude = (multitude, className) => {
    return (
      <div className={className}>
        {multitude.map((user, i) => (
          <p key={`Monday shift1, multitude${i}, ${user}`}>{user}</p>
        ))}
      </div>
    );
  };
  const week = props.schedule.map((week, i) => (
    <div key={i} className='schedule'>
      <h1>
        {' '}
        Harmonogram na okres: {week.dateFrom} - {week.dateTo}
      </h1>
      <div className='table'>
        <div className='day monday'>
          Poniedziałek
          <div className='shift1'>
            <p>6:30</p>
            {multitude(week.Monday.shift1.multitude1, 'multitude1')}
            {multitude(week.Monday.shift1.multitude2, 'multitude2')}
          </div>
          <div className='shift2'>
            <p>14:00</p>
            {multitude(week.Monday.shift2.multitude1, 'multitude1')}
            {multitude(week.Monday.shift2.multitude2, 'multitude2')}
          </div>
          <div className='shift3'>
            <p>21:30</p>
            {multitude(week.Monday.shift3.multitude1, 'multitude1')}
            {multitude(week.Monday.shift3.multitude2, 'multitude2')}
          </div>
        </div>
        <div className='day tuesday'>
          Wtorek
          <div className='shift1'>
            <p>6:30</p>
            {multitude(week.Tuesday.shift1.multitude1, 'multitude1')}
            {multitude(week.Tuesday.shift1.multitude2, 'multitude2')}
          </div>
          <div className='shift2'>
            <p>14:00</p>
            {multitude(week.Tuesday.shift2.multitude1, 'multitude1')}
            {multitude(week.Tuesday.shift2.multitude2, 'multitude2')}
          </div>
          <div className='shift3'>
            <p>21:30</p>
            {multitude(week.Tuesday.shift3.multitude1, 'multitude1')}
            {multitude(week.Tuesday.shift3.multitude2, 'multitude2')}
          </div>
        </div>
        <div className='day wednesday'>
          Środa
          <div className='shift1'>
            <p>6:30</p>
            {multitude(week.Wednesday.shift1.multitude1, 'multitude1')}
            {multitude(week.Wednesday.shift1.multitude2, 'multitude2')}
          </div>
          <div className='shift2'>
            <p>14:00</p>
            {multitude(week.Wednesday.shift2.multitude1, 'multitude1')}
            {multitude(week.Wednesday.shift2.multitude2, 'multitude2')}
          </div>
          <div className='shift3'>
            <p>21:30</p>
            {multitude(week.Wednesday.shift3.multitude1, 'multitude1')}
            {multitude(week.Wednesday.shift3.multitude2, 'multitude2')}
          </div>
        </div>
        <div className='day thursday'>
          Czwartek
          <div className='shift1'>
            <p>6:30</p>
            {multitude(week.Thursday.shift1.multitude1, 'multitude1')}
            {multitude(week.Thursday.shift1.multitude2, 'multitude2')}
          </div>
          <div className='shift2'>
            <p>14:00</p>
            {multitude(week.Thursday.shift2.multitude1, 'multitude1')}
            {multitude(week.Thursday.shift2.multitude2, 'multitude2')}
          </div>
          <div className='shift3'>
            <p>21:30</p>
            {multitude(week.Thursday.shift3.multitude1, 'multitude1')}
            {multitude(week.Thursday.shift3.multitude2, 'multitude2')}
          </div>
        </div>
        <div className='day friday'>
          Piątek
          <div className='shift1'>
            <p>6:30</p>
            {multitude(week.Friday.shift1.multitude1, 'multitude1')}
            {multitude(week.Friday.shift1.multitude2, 'multitude2')}
          </div>
          <div className='shift2'>
            <p>14:00</p>
            {multitude(week.Friday.shift2.multitude1, 'multitude1')}
            {multitude(week.Friday.shift2.multitude2, 'multitude2')}
          </div>
          <div className='shift3'>
            <p>21:30</p>
            {multitude(week.Friday.shift3.multitude1, 'multitude1')}
            {multitude(week.Friday.shift3.multitude2, 'multitude2')}
          </div>
        </div>
        <div className='day saturday'>
          Sobota
          <div className='shift1'>
            <p>6:30</p>
            {multitude(week.Saturday.shift1.multitude1, 'multitude1')}
            {multitude(week.Saturday.shift1.multitude2, 'multitude2')}
          </div>
          <div className='shift2'>
            <p>14:00</p>
            {multitude(week.Saturday.shift2.multitude1, 'multitude1')}
            {multitude(week.Saturday.shift2.multitude2, 'multitude2')}
          </div>
          <div className='shift3'>
            <p>21:30</p>
            {multitude(week.Saturday.shift3.multitude1, 'multitude1')}
            {multitude(week.Saturday.shift3.multitude2, 'multitude2')}
          </div>
        </div>
        <div className='day sunday'>
          Niedziela
          <div className='shift1'>
            <p>6:30</p>
            {multitude(week.Sunday.shift1.multitude1, 'multitude1')}
            {multitude(week.Sunday.shift1.multitude2, 'multitude2')}
          </div>
          <div className='shift2'>
            <p>14:00</p>
            {multitude(week.Sunday.shift2.multitude1, 'multitude1')}
            {multitude(week.Sunday.shift2.multitude2, 'multitude2')}
          </div>
          <div className='shift3'>
            <p>21:30</p>
            {multitude(week.Sunday.shift3.multitude1, 'multitude1')}
            {multitude(week.Sunday.shift3.multitude2, 'multitude2')}
          </div>
        </div>
      </div>
    </div>
  ));

  return <>{week}</>;
};

export default Table;
