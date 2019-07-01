import React from 'react';

import '../styles/style.css';

const Task = props => {
  let items = props.list
  return (
    <div><p>task</p></div>
    // <div>{items.map((item, i) => (
    //   <ul>
    //     <li>{i + 1}. {item} <i className="fas fa-arrow-right"></i></li>
    //   </ul>
    // ))}
    // </div>
  )
}
export default Task;