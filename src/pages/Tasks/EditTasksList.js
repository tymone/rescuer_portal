import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const EditTasksList = ({ tasks }) => {
  const getTask = TasksList =>
    TasksList.map(task => (
      <Link key={task.id} to={`/zadania/edytuj/${task.id}`}>
        <li>
          <span>{task.title}</span>
        </li>
      </Link>
    ));

  return (
    <>
      <h1>Tryb edycji zadań</h1>
      <ul>{getTask(tasks)}</ul>
    </>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks.list
});

export default connect(mapStateToProps)(EditTasksList);
