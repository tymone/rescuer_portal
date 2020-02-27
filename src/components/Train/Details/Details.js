import React from 'react';
import { connect } from 'react-redux';

import Head from '../Table/Head';
import DateRow from '../Table/DateRow';
import Body from '../Table/Body';
import DetailsRescuer from './DetailsRescuer';

const Details = ({ match, group, train }) => {
  const groupID = Number(match.params.id) + 1;

  const getRescuers = group.filter((rescuer) => rescuer.train === `grupa${groupID}`);

  const rescuerInfo = getRescuers.map((rescuer) => <DetailsRescuer rescuer={rescuer} key={rescuer.id} />);

  return (
    <div className="train">
      <h1>Grupa {groupID}</h1>
      <div className="table">
        <Head title={['Imię', 'Nazwisko', 'Znaczek', 'OSRG 1', 'Dołowe 1', 'Powierzchnia 1', 'OSRG 2', 'Dołowe 2', 'Powierzchnia 2']} />
        <DateRow fromDetails details={train.groups[`group${groupID}`]} />
        <Body list={rescuerInfo} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  group: state.team.list,
  train: state.group.list[0]
});

export default connect(mapStateToProps)(Details);
