import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Head from './Table/Head';
import Body from './Table/Body';
import Group from './Group';

const Train = ({ train: { groups, year } }) => {
  const setArrayFromGroups = Object.keys(groups);
  const listItemDetails = setArrayFromGroups.map((item) => <Group details={groups[item]} group={setArrayFromGroups.indexOf(item)} />);

  return (
    <div className="train">
      <div className="options">
        <Link to="/cwiczenia/dodaj">
          <i className="far fa-calendar-plus"></i>
        </Link>
      </div>
      <h1>Terminy ćwiczeń ratowniczych na rok {year}</h1>
      <div className="table">
        <Head title={['Grupa', 'OSRG 1', 'Dołowe 1', 'Powierzchnia 1', 'OSRG 2', 'Dołowe 2', 'Powierzchnia 2', 'szczegóły']} />
        <Body list={listItemDetails} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  train: state.group.list[0]
});

export default connect(mapStateToProps)(Train);
