import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row/Row';

const Body = ({ schedule, type, handleChange, getGroup, removeGroup }) => {
  const getRow = () => {
    if (type === 'read') {
      const { groups, year } = schedule;
      return Object.keys(groups).map((group) => (
        <Row key={groups[group].id} type={type} group={groups[group]} year={year} />
      ));
    }
    if (type === 'details') {
      const { date, rescuers } = schedule;
      const { osrg1, under1, ground1, osrg2, under2, ground2 } = date;
      const getDate = { osrg1, under1, ground1, osrg2, under2, ground2 };

      return (
        <>
          <Row type="date" group={getDate} />
          {Object.keys(rescuers).map((rescuer) => (
            <Row key={rescuer} type="rescuer" group={rescuers[rescuer]} />
          ))}
        </>
      );
    }
    if (type === 'create') {
      const { id, osrg1, under1, ground1, osrg2, under2, ground2, groups } = schedule;
      const group = { id, osrg1, under1, ground1, osrg2, under2, ground2 };
      return (
        <>
          {Object.keys(groups).map((group) => (
            <Row
              key={groups[group].id}
              type="readCreate"
              group={groups[group]}
              removeGroup={removeGroup}
            />
          ))}
          <Row type={type} group={group} handleChange={handleChange} getGroup={getGroup} />
        </>
      );
    }
    if (type === 'update') {
      const { groups } = schedule;

      return (
        <>
          {Object.keys(groups).map((group) => (
            <Row
              key={group}
              type="update"
              group={groups[group]}
              handleChange={handleChange}
              removeGroup={removeGroup}
            />
          ))}
        </>
      );
    }
    return <p>Brak grupy lub wystąpił jakiś błąd.</p>;
  };

  return <>{getRow()}</>;
};

Body.propTypes = {
  schedule: PropTypes.object,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  getGroup: PropTypes.func,
  removeGroup: PropTypes.func,
};

Body.defaultProps = {
  schedule: {},
};

export default Body;
