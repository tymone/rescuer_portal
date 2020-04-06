import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Table from './Read/Table';

const Train = ({ list }) => {
  const showTrainingGroupsSchedules = (list) => {
    if (list.length !== 0) {
      return list.map((listItem) => <Table key={listItem.year} list={listItem} />);
    } else {
      return <h1>Brak harmonogramu ćwiczeń lub wystąpił błąd.</h1>;
    }
  };

  return (
    <div className="train">
      <div className="options">
        <Link to="/cwiczenia/dodaj">
          <i className="far fa-calendar-plus"></i>
        </Link>
      </div>
      {showTrainingGroupsSchedules(list)}
    </div>
  );
};

const mapStateToProps = ({ trainingGroups: { list } }) => ({ list });

export default connect(mapStateToProps)(Train);
