import React from "react";
import newWeek from "../../../../helpers/TemplateCreateScheduleWeek";

import Day from "./Day";

const Table = ({ getSchedule }) => {
  const getWeek = newSchedule => {
    const {
      day,
      multitudeName,
      time,
      user1,
      user2,
      user3,
      user4,
      user5
    } = newSchedule;

    const multitude = [user1, user2, user3, user4, user5];

    newWeek[day][multitudeName] = { time, multitude };

    getSchedule(newWeek);
  };

  return (
    <div className="table">
      <Day getWeek={getWeek} day={"Monday"} dayPl={"Poniedziałek"} />
      <Day getWeek={getWeek} day={"Tuesday"} dayPl={"Wtorek"} />
      <Day getWeek={getWeek} day={"Wednesday"} dayPl={"Środa"} />
      <Day getWeek={getWeek} day={"Thursday"} dayPl={"Czwartek"} />
      <Day getWeek={getWeek} day={"Friday"} dayPl={"Piątek"} />
      <Day getWeek={getWeek} day={"Saturday"} dayPl={"Sobota"} />
      <Day getWeek={getWeek} day={"Sunday"} dayPl={"Niedziela"} />
    </div>
  );
};
export default Table;
