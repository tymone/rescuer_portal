import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Head from '../Template/Table/Head';
import DateRow from './DateRow';
import RescuerRow from './RescuerRow';

const Details = ({ match, list, group, history }) => {
  const groupIndex = Number(match.params.id);
  const yearIndex = Number(match.params.year);
  const getList = list.filter((item) => item.year === yearIndex)[0].groups;
  const getGroup = getList[`group${groupIndex}`];
  const getRescuers = group.filter((rescuer) => Number(rescuer.trainingGroup) === groupIndex);

  const getRescuersList = (list) => {
    if (list.length !== 0) {
      return list.map((rescuer) => (
        <Link key={rescuer.id} to={`/druzyna/${rescuer.id}`}>
          <RescuerRow details={rescuer} />
        </Link>
      ));
    } else {
      return <p>Brak listy lub wystąpił jakiś błąd.</p>;
    }
  };

  return (
    <div className="train">
      <h1>Grupa {groupIndex}</h1>
      <div className="table">
        <Head type="details" />
        <DateRow details={getGroup} />
        <div className="body">{getRescuersList(getRescuers)}</div>
      </div>
      <div className="options">
        <i className="fas fa-chevron-left" onClick={history.goBack}></i>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  group: state.team.list,
  list: state.trainingGroups.list
});

export default connect(mapStateToProps)(Details);
