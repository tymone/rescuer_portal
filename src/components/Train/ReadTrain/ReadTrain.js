import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Table } from 'components/Train/Template';

const ReadTrain = ({ list }) => {
  const showTrainingGroupsSchedules = (list) => {
    if (list.length !== 0) {
      return list.map((schedule) => (
        <Table
          key={schedule.year}
          type="read"
          title={`Harmonogram ćwiczeń ratowniczych na rok ${schedule.year}`}
          schedule={schedule}
        />
      ));
    }
    return <h1>Brak harmonogramu ćwiczeń lub wystąpił błąd.</h1>;
  };

  return <ul>{showTrainingGroupsSchedules(list)}</ul>;
};

const mapStateToProps = ({ trainingGroups: { list } }) => ({ list });

ReadTrain.propTypes = {
  list: PropTypes.array,
};

ReadTrain.defaultProps = {
  list: [],
};

export default connect(mapStateToProps)(ReadTrain);
