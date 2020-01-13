import React from "react";

const Outside = ({ outsideEmployee }) => {
  let getOutsideEmployee = outsideEmployee => {
    const { overMultitude, train, sick, course, leave } = outsideEmployee;
    return (
      <>
        <p>
          <b>
            <u>Poza zastępem</u>
          </b>
          :{" "}
          {overMultitude.length
            ? overMultitude.map(user => user).join(", ")
            : " ---"}
        </p>
        <p>
          <b>
            <u>Ćwiczenia</u>
          </b>
          : {train.length ? train.map(user => user).join(", ") : " ---"}
        </p>
        <p>
          <b>
            <u>L4</u>
          </b>
          : {sick.length ? sick.map(user => user).join(", ") : " ---"}
        </p>
        <p>
          <b>
            <u>Kurs</u>
          </b>
          : {course.length ? course.map(user => user).join(", ") : " ---"}
        </p>
        <p>
          <b>
            <u>Urlop</u>
          </b>
          : {leave.length ? leave.map(user => user).join(", ") : " ---"}
        </p>
      </>
    );
  };

  return (
    <div className="underTable">{getOutsideEmployee(outsideEmployee)}</div>
  );
};

export default Outside;
