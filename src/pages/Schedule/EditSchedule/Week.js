import React from "react";

import Day from "./Day";

const Week = ({ getWeek, week }) => {
  const getMultitude = (newMultitude, day) => {
    getWeek(newMultitude, day);
  };

  const {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  } = week;

  return (
    <div className="table">
      <Day
        getDay={Monday}
        getMultitudes={getMultitude}
        day={"Monday"}
        dayPL={"Poniedziałek"}
      />
      <Day
        getDay={Tuesday}
        getMultitudes={getMultitude}
        day={"Tuesday"}
        dayPL={"Wtorek"}
      />
      <Day
        getDay={Wednesday}
        getMultitudes={getMultitude}
        day={"Wednesday"}
        dayPL={"Środa"}
      />
      <Day
        getDay={Thursday}
        getMultitudes={getMultitude}
        day={"Thursday"}
        dayPL={"Czwartek"}
      />
      <Day
        getDay={Friday}
        getMultitudes={getMultitude}
        day={"Friday"}
        dayPL={"Piątek"}
      />
      <Day
        getDay={Saturday}
        getMultitudes={getMultitude}
        day={"Saturday"}
        dayPL={"Sobota"}
      />
      <Day
        getDay={Sunday}
        getMultitudes={getMultitude}
        day={"Sunday"}
        dayPL={"Niedziela"}
      />
    </div>
  );
};

export default Week;
