import React from 'react';
import { connect } from 'react-redux';

import Task from './Task';

const TaskDone =({tasks}) =>{

  const getTask = (doneTasks) => {
    doneTasks.sort((a,b) => (b.finishDate - a.finishDate))
    
    if(doneTasks.length){
      return doneTasks.map((task, i) =>(
        <Task className={'done'} key={task.id} task={task} id={i +1} />
      ))
    }
    else{
      return 'Brak zadań'
    }
  }

  return (
    <div className="done">
      <h2>wykonane</h2>
      <ul>
        {getTask(tasks)}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  tasks: state.tasks.list.filter(task => !task.active)
}) 
export default connect(mapStateToProps)(TaskDone);