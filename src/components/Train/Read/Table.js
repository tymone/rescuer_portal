import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import { Link } from 'react-router-dom';

import Head from '../Template/Table/Head';
import Body from '../Template/Table/Body';

const Table = ({ list, remove }) => {
  return (
    <>
      <h1>Harmonogram ćwiczeń ratowniczych na rok {list.year}</h1>

      <div className="table">
        <Head />
        <Body list={list.groups} year={list.year} type="read" />
      </div>
      <div className="options edit">
        <i className="fas fa-trash-alt" onClick={() => remove(list.year)}></i>
        <Link to={`cwiczenia/edytuj/${list.year}`}>
          <i className="fas fa-edit"></i>
        </Link>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(actions.remove(id))
});
export default connect(null, mapDispatchToProps)(Table);
