import React from "react";

import UnderTableForm from "./UnderTableForm";

const UnderTable = ({ UnderTableEmployee, getUnderTable }) => {
  const { overMultitude, train, sick, course, leave } = UnderTableEmployee;
  return (
    <div className="underTable">
      <UnderTableForm
        getUnderTable={getUnderTable}
        employees={overMultitude}
        title={"Poza zastępem"}
        name={"overMultitude"}
      />
      <UnderTableForm
        getUnderTable={getUnderTable}
        employees={train}
        title={"Ćwiczenia"}
        name={"train"}
      />
      <UnderTableForm
        getUnderTable={getUnderTable}
        employees={sick}
        title={"L4"}
        name={"sick"}
      />
      <UnderTableForm
        getUnderTable={getUnderTable}
        employees={course}
        title={"Kurs"}
        name={"course"}
      />
      <UnderTableForm
        getUnderTable={getUnderTable}
        employees={leave}
        title={"Urlop"}
        name={"leave"}
      />
    </div>
  );
};

export default UnderTable;
