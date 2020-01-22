import React from 'react';
import { connect } from 'react-redux';
import Group from './Group';

const Train = ({ groups }) => {
  const getGroupsToArray = Object.keys(groups);
  const getGroups = getGroupsToArray.map((group, i) => <Group key={group} value={groups[group]} index={i} />);

  return (
    <div className="train">
      <h1>Terminy ćwiczeń ratowniczych dla poszczególnych grup</h1>
      <div className="table">
        <div className="head">
          <span>Grupa</span>
          <span>OSRG 1</span>
          <span>Dołowe 1</span>
          <span>Powierzchnia 1</span>
          <span>OSRG 2</span>
          <span>Dołowe 2</span>
          <span>Powierzchnia 2</span>
        </div>
        <div className="body">
          <ul className="groups">{getGroups}</ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  groups: state.group.list
});

export default connect(mapStateToProps)(Train);
