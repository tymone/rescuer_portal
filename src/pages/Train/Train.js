import React from "react";
import { connect } from "react-redux";
import Group from "./Group";

const Train = ({ groups }) => {
  const getGroupsFromState = groups;
  const getGroupsToArray = Object.keys(getGroupsFromState);
  const getGroups = getGroupsToArray.map((group, i) => (
    <Group key={group} value={getGroupsFromState[group]} index={i} />
  ));

  return (
    <div className="train">
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
