import React from 'react';

const AddTask = ({ change, title, value, editActive }) => {
  return (
    <label className={editActive ? 'active' : ''}>
      <input type="text" placeholder='Wpisz tytuł' onChange={change} name='title' value={title} />
      <input type="text" placeholder='Wpisz treść' onChange={change} name='value' value={value} />
    </label>
  )
}

export default AddTask