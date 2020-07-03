import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Table from '../Template/TeamTable';

const ReadTeam = ({ team }) => {
  const getTeamTable = (team) => {
    if (team.length !== 0) {
      return <Table team={team} />;
    }
    return <p>Brak danych drużyny KSRG lub wystąpił jakiś błąd.</p>;
  };
  return (
    <>
      <h1>Drużyna KSRG</h1>
      {getTeamTable(team)}
    </>
  );
};

const mapStateToProps = ({ team }) => ({ team: team.list });

ReadTeam.propTypes = {
  team: PropTypes.array,
};
export default connect(mapStateToProps)(ReadTeam);
