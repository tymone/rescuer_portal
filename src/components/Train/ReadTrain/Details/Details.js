import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Table } from 'components/Train/Template';

const Details = ({ match: { params }, list, group }) => {
  const getList = list.find((item) => item.year === Number(params.year));
  const getDate = getList.groups[params.id];
  const getRescuers = group.filter(
    (rescuer) => Number(rescuer.trainingGroup) === Number(params.id),
  );
  const bodyOfTable = { date: getDate, rescuers: { ...getRescuers } };

  return (
    <ul>
      <Table type="details" title={`Grupa ${params.id}`} schedule={bodyOfTable} />
    </ul>
  );
};

const mapStateToProps = ({ team, trainingGroups }) => ({
  group: team.list,
  list: trainingGroups.list,
});

Details.propTypes = {
  match: PropTypes.object,
  list: PropTypes.array,
  group: PropTypes.array,
};

Details.defaultProps = {
  match: {},
  list: [],
  group: [],
};
export default connect(mapStateToProps)(Details);
