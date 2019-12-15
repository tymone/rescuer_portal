import React from "react";

const Task = ({ task, id, className }) => {
  const showTaskContent = (id, className) => {
    let task = document.querySelector(`.${className} li:nth-child(${id}) div`);
    task.classList.toggle("on");
  };

  return (
    <li>
      <span onClick={() => showTaskContent(id, className)}>{task.title}</span>
      <div className="toggle">
        <div className="toggle-p">
          <p>{task.content}</p>
        </div>
      </div>
    </li>
  );
};
export default Task;
