import React from 'react';
import { connect } from 'react-redux'

import Week from './Week';

const Table = ({ schedules }) => {

  const scheduleWeek = schedules.map( week => ( 
      <Week key={week.id} week={week} />
  ))
  
  return(
    <div className='scheduleContainer'>
      {scheduleWeek}
    </div>
  )
}

const mapStateToProps = state => ({
  schedules: state.schedules.list
})
export default connect(mapStateToProps, {})(Table);