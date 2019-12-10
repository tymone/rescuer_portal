import React from "react";

import TaskToDo from "./TaskToDo";
import TaskDone from "./TaskDone";

const Tasks= () => {
  return (
    <div className='TasksMain'>
      <h1>Lista zadań</h1>
      <TaskToDo />
      <TaskDone />
    </div>
  );
}

export default Tasks;