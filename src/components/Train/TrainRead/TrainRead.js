import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';

import { StyledTable } from '../StyledTrain';

import Head from '../Template/Table/Head';
import Body from '../Template/Table/Body';

const TrainRead = ({ list, remove }) => {
  return (
    <>
      <h1>Harmonogram ćwiczeń ratowniczych na rok {list.year}</h1>

      <StyledTable>
        <Head />
        <Body list={list.groups} year={list.year} type="read" />
      </StyledTable>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(actions.remove(id)),
});
export default connect(null, mapDispatchToProps)(TrainRead);
