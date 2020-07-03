import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import setDate from 'helpers/setDate';
import { StyledBody } from 'components/Train/Template/Table/StyledTable';
import { StyledButton } from 'components/Train/StyledTrain';
import Element from './Element';

const Row = ({ type, group, year, handleChange, getGroup, removeGroup }) => {
  const getRow = () => {
    if (type === 'read') {
      const { osrg1, under1, ground1, osrg2, under2, ground2, id } = group;
      const getGroup = { osrg1, under1, ground1, osrg2, under2, ground2 };
      return (
        <>
          <li>{id}</li>
          {Object.keys(getGroup).map((value) => (
            <Element key={value} type={type} value={setDate(group[value])} />
          ))}
          <li>
            <Link to={`/cwiczenia/szczegoly/${year}/${group.id}`}>
              <i className="fas fa-chevron-right" />
            </Link>
          </li>
        </>
      );
    }
    if (type === 'date') {
      return (
        <>
          <li />
          <li />
          {Object.keys(group).map((value) => (
            <Element key={value} type="read" value={setDate(group[value])} />
          ))}
          <li />
        </>
      );
    }
    if (type === 'rescuer') {
      const { name, surname, included } = group;
      const { osrg1, under1, ground1, osrg2, under2, ground2 } = included;
      const getElements = { name, surname, osrg1, under1, ground1, osrg2, under2, ground2 };
      return (
        <>
          {Object.keys(getElements).map((value) => (
            <Element key={value} type="read" value={getElements[value]} />
          ))}
          <li>
            <Link to={`/druzyna/${group.id}`}>
              <i className="fas fa-chevron-right" />
            </Link>
          </li>
        </>
      );
    }
    if (type === 'create') {
      const { osrg1, under1, ground1, osrg2, under2, ground2, id } = group;
      const dateInput = { osrg1, under1, ground1, osrg2, under2, ground2 };
      return (
        <>
          <Element
            type={type}
            inputType="number"
            inputName="id"
            inputValue={id}
            handleChange={handleChange}
          />
          {Object.keys(dateInput).map((value) => (
            <Element
              key={value}
              type={type}
              inputType="date"
              inputName={value}
              inputValue={group[value]}
              handleChange={handleChange}
            />
          ))}
          <li>
            <StyledButton onClick={getGroup}>dodaj</StyledButton>
          </li>
        </>
      );
    }
    if (type === 'readCreate') {
      const { osrg1, under1, ground1, osrg2, under2, ground2, id } = group;
      const getGroup = { osrg1, under1, ground1, osrg2, under2, ground2 };
      return (
        <>
          <li>{id}</li>
          {Object.keys(getGroup).map((value) => (
            <Element key={value} type="read" value={setDate(group[value])} />
          ))}
          <li>
            <i className="fas fa-trash-alt" onClick={() => removeGroup(id)} />
          </li>
        </>
      );
    }
    if (type === 'update') {
      const { osrg1, under1, ground1, osrg2, under2, ground2, id } = group;
      const editValue = { osrg1, under1, ground1, osrg2, under2, ground2 };
      return (
        <>
          <li>{id}</li>
          {Object.keys(editValue).map((value) => (
            <Element
              key={value}
              type={type}
              id={id}
              inputType="date"
              inputName={value}
              inputValue={group[value]}
              handleChange={handleChange}
            />
          ))}
        </>
      );
    }
    return <p>Brak danych lub wystąpił błąd.</p>;
  };
  return <StyledBody>{getRow()}</StyledBody>;
};

Row.propTypes = {
  type: PropTypes.string,
  group: PropTypes.object,
  year: PropTypes.number,
  handleChange: PropTypes.func,
  getGroup: PropTypes.func,
  removeGroup: PropTypes.func,
};

Row.defaultProps = {
  group: {},
};

export default Row;
