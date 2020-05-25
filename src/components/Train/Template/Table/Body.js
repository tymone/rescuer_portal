import React from 'react';

import GroupRow from './GroupRow';
import NewGroupRow from './NewGroupRow';

const Body = ({ list, year, type, handleChange, addGroup, removeGroup, submitGroup }) => {
  const getGroupRows = (list) => {
    const groupList = Object.keys(list);
    if (groupList.length !== 0) {
      return groupList.map((group) => (
        <GroupRow
          key={list[group].id}
          year={year}
          group={list[group]}
          removeGroup={removeGroup}
          type={type}
          submitGroup={submitGroup}
        />
      ));
    } else {
      return type === 'create' ? null : <p>Brak danych do wyświetlenia lub wystąpił błąd.</p>;
    }
  };

  return (
    <>
      <>
        {getGroupRows(list)}
        {type === 'create' ? <NewGroupRow handleChange={handleChange} addGroup={addGroup} list={list} /> : null}
      </>
    </>
  );
};

export default Body;
