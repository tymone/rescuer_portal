import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import Table from './Table.js';

const Schedule = ({ schedule }) => {

  return (
    <div className='schedule'>
      <button>
        <Link to='/harmonogram/stworz'>Dodaj</Link>
      </button>
      <Table schedule={schedule.list} />
    </div>
  );
}

const mapStateToProps = state => ({
  schedule: state.schedule
})
export default connect(mapStateToProps, {})(Schedule);