import React from 'react';

const AddTask = (props) => {
  const { change, title, value, addTask } = props
  return (
    <label className='toggleDisplay'>
      <input type="text" placeholder='Wpisz tytuł' onChange={change} name='title' value={title} />
      <input type="text" placeholder='Wpisz treść' onChange={change} name='value' value={value} />
      <button onClick={addTask}>Zapisz</button>
    </label>
  )
}

export default AddTask