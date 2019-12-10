import React from 'react';

const Outside = ({ outsideEmployee }) => {
  let getOutsideEmployee = (outsideEmployee) => {
    const { multitude, train, sick, course, leave } = outsideEmployee
    return(
      <>
        <p><b><u>Poza zastępem</u></b>: {multitude.length ? multitude.map(user => `${user}, `) : (' ---')}</p>
        <p><b><u>Ćwiczenia</u></b>: {train.length ? train.map(user => `${user}, `) : (' ---')}</p>
        <p><b><u>L4</u></b>: {sick.length ? sick.map(user => `${user}, `) : (' ---')}</p>
        <p><b><u>Kurs</u></b>: {course.length ? course.map(user => `${user}, `) : (' ---')}</p>
        <p><b><u>Urlop</u></b>: {leave.length ? leave.map(user => `${user}, `) : (' ---')}</p>
      </>
    )}

  return(
    <div className="underTable">
      {getOutsideEmployee(outsideEmployee)}
    </div>
  )
}

export default Outside;