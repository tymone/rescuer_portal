import React from 'react';

import '../../styles/style.css';

const Group = ({ group, index }) => {

  let date = (date) => {
    let day = new Date(date).getDate()
    let month = new Date(date).getMonth() + 1

    return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}`
  }

  return (
    <>
      <li>{(index + 1)}</li>
      <li style={{ color: 'red' }}>{date(group[0])}</li>
      <li><b>{date(group[1])}</b></li>
      <li style={{ color: 'green' }}>{date(group[2])}</li>
      <li style={{ color: 'red' }}>{date(group[3])}</li>
      <li><b>{date(group[4])}</b></li>
      <li style={{ color: 'green' }}>{date(group[5])}</li>
    </>
  )
}

export default Group