import React from 'react';
import { connect } from 'react-redux'

import Task from './Task';

const TaskToDo = ({tasks}) =>{

  const getTask = (activeTasks) => {
    activeTasks.sort((a, b) => (a.addDate - b.addDate))

    if(activeTasks.length){
      return activeTasks.map((task, i) =>(
        <Task className={'toDo'} key={task.id} task={task} id={i +1} />
      ))
    }
    else{
      return 'Brak zadań'
    }
  }

  return ( 
    <div className="toDo">
      <h2>Do wykonania</h2>
      <ul>
        {getTask(tasks)}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  tasks: state.tasks.list.filter(task => task.active)
})
export default connect(mapStateToProps)(TaskToDo);