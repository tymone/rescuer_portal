import React from 'react';
import PropTypes from 'prop-types';

import { StyledTable } from 'components/Train/StyledTrain';
import { StyledInputYear } from 'components/Train/CreateGroup/StyledCreateGroup';
import Head from './Head';
import Body from './Body';

const Table = ({
  schedule,
  type,
  title,
  handleChange,
  handleChangeYear,
  getGroup,
  removeGroup,
}) => (
  <li>
    <h1>
      {title}
      {type === 'create' ? (
        <StyledInputYear
          type="number"
          min="2020"
          name="year"
          value={schedule.year}
          onChange={handleChange}
        />
      ) : null}
      {type === 'update' ? (
        <StyledInputYear
          type="number"
          min="2020"
          name="year"
          value={schedule.year}
          onChange={handleChangeYear}
        />
      ) : null}
    </h1>
    <StyledTable>
      <Head type={type} />
      <Body
        schedule={schedule}
        type={type}
        handleChange={handleChange}
        getGroup={getGroup}
        removeGroup={removeGroup}
      />
    </StyledTable>
  </li>
);

Table.propTypes = {
  schedule: PropTypes.object,
  type: PropTypes.string,
  title: PropTypes.string,
  handleChange: PropTypes.func,
  handleChangeYear: PropTypes.func,
  getGroup: PropTypes.func,
  removeGroup: PropTypes.func,
};

Table.defaultProps = {
  schedule: {},
};

export default Table;
