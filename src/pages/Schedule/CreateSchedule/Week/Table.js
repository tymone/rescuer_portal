import React from 'react';
import shifts3 from '../TemplateShifts/shifts3';
import shifts4 from '../TemplateShifts/shifts4';
import shifts7 from '../TemplateShifts/shifts7';

import Day from './Day';

const Table = ({ getSchedule, shifts }) => {
  let shiftsTemplate;
  let multitudeNumber;
  switch (Number(shifts)) {
    case 3:
      shiftsTemplate = shifts3;
      multitudeNumber = 6;
      break;
    case 4:
      shiftsTemplate = shifts4;
      multitudeNumber = 8;
      break;
    case 7:
      shiftsTemplate = shifts7;
      multitudeNumber = 7;
      break;
    default:
      return;
  }
  const getWeek = newSchedule => {
    const { day, multitudeName, time, multitude } = newSchedule;
    shiftsTemplate[day][multitudeName] = { time, multitude };
    getSchedule(shiftsTemplate);
  };

  return (
    <div className="table">
      <Day day={'Monday'} getWeek={getWeek} multitudeNumber={multitudeNumber} dayPl={'Poniedziałek'} />
      <Day day={'Tuesday'} getWeek={getWeek} multitudeNumber={multitudeNumber} dayPl={'Wtorek'} />
      <Day day={'Wednesday'} getWeek={getWeek} multitudeNumber={multitudeNumber} dayPl={'Środa'} />
      <Day day={'Thursday'} getWeek={getWeek} multitudeNumber={multitudeNumber} dayPl={'Czwartek'} />
      <Day day={'Friday'} getWeek={getWeek} multitudeNumber={multitudeNumber} dayPl={'Piątek'} />
      <Day day={'Saturday'} getWeek={getWeek} multitudeNumber={multitudeNumber} dayPl={'Sobota'} />
      <Day day={'Sunday'} getWeek={getWeek} multitudeNumber={multitudeNumber} dayPl={'Niedziela'} />
    </div>
  );
};
export default Table;
