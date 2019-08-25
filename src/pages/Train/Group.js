import React from 'react';

import '../../styles/style.css';

const Group = ({ group, index }) => {

  return (
    <>
      <li>{(index + 1)}</li>
      <li style={{ color: 'red' }}>{new Date(group[0]).toLocaleString().slice(0, 10)}</li>
      <li><b>{new Date(group[1]).toLocaleString().slice(0, 10)}</b></li>
      <li style={{ color: 'green' }}>{new Date(group[2]).toLocaleString().slice(0, 10)}</li>
      <li style={{ color: 'red' }}>{new Date(group[3]).toLocaleString().slice(0, 10)}</li>
      <li><b>{new Date(group[4]).toLocaleString().slice(0, 10)}</b></li>
      <li style={{ color: 'green' }}>{new Date(group[5]).toLocaleString().slice(0, 10)}</li>
    </>
  )
}

export default Group