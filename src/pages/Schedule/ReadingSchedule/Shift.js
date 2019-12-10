import React from 'react';

import Multitude from './Multitude';

const Shift = ({ shift,  multitude }) => {
  const multitudes = (multitude) =>{
    const getMultitude = Object.keys(multitude)
    getMultitude.splice(0,1)

    return getMultitude.map((setMultitude, i) => (
      <Multitude key={setMultitude} multitude={multitude[setMultitude]} index={i + 1}/>
    ))
  }
  
  return(
    <div className='shift'>
      <p>{shift}</p>
      {multitudes(multitude)}
    </div>
  )
}

export default Shift;