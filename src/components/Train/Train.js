import React from 'react';
import { connect } from 'react-redux';

import TrainRead from './TrainRead';

const Train = ({ list }) => {
  const showTrainingGroupsSchedules = (list) => {
    if (list.length !== 0) {
      return list.map((listItem) => <TrainRead key={listItem.year} list={listItem} />);
    } else {
      return <h1>Brak harmonogramu ćwiczeń lub wystąpił błąd.</h1>;
    }
  };

  return <>{showTrainingGroupsSchedules(list)}</>;
};

const mapStateToProps = ({ trainingGroups: { list } }) => ({ list });

export default connect(mapStateToProps)(Train);
