import React from 'react';

import '../../styles/style.css';

const Group = ({ value, index }) => {

  let date = (date) => {
    let day = new Date(date).getDate()
    let month = new Date(date).getMonth() + 1

    return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}`
  }

  const getGroup = (value) => (
    value.map((getDate, i) =>(
      <div key={getDate} className='item'>
        {date(getDate)}
      </div>
    ))
  )

  return (
    <li>
      <div className="item">{index + 1}</div>
      {getGroup(value)}
    </li>
  )
}

export default Group