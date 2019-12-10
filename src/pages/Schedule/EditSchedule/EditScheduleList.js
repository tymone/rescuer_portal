import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const EditScheduleList =({schedules}) => {

  const getSchedulesList = (schedules) => {
    const schedule = schedules.map(schedule => (
      <Link key={schedule.id} to={`/harmonogram/edytuj/${schedule.id}`}>
        <p >harmonogram od {schedule.dateFrom} do {schedule.dateTo}</p>
      </Link>
    ))
    return schedule
  }

  return ( 
    <div className="editScheduleList">
      {getSchedulesList(schedules)}
    </div>
    );
}

const mapStateToProps = state => ({
  schedules: state.schedules.list
})
 
export default connect(mapStateToProps)(EditScheduleList);