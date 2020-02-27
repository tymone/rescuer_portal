import React from 'react';
import { connect } from 'react-redux';

import Head from '../Table/Head';
import Body from '../Table/Body';
import DateRow from '../Table/DateRow';
import Rescuer from './Rescuer';

const EditTrain = ({ list, match, team, history }) => {
  const id = Number(match.params.id) + 1;
  const group = list[0].groups[`group${id}`];

  const getRescuer = (team, id) => {
    const filteredTeam = team.filter((rescuer) => rescuer.train === `grupa${Number(id)}`);
    return filteredTeam.map((rescuer) => <Rescuer key={rescuer.id} rescuer={rescuer} />);
  };

  return (
    <div className="editTrain">
      <h1>Tryb edycji ćwiczeń dla grupy {id}</h1>
      <div className="table">
        <Head title={['Imię', 'Nazwisko', 'OSRG 1', 'Dołowe 1', 'Powierzchnia 1', 'OSRG 2', 'Dołowe 2', 'Powierzchnia 2', 'zapisz']} />
        <DateRow fromEdit details={group} />
        <Body list={getRescuer(team, id)} />
      </div>
      <div className="options">
        <i className="fas fa-chevron-left" onClick={() => history.goBack()}></i>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.group.list,
  team: state.team.list
});

export default connect(mapStateToProps)(EditTrain);
