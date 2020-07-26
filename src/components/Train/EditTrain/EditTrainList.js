import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from 'data/actions/trainingGroups.actions';

import { StyledListItem } from './StyledEditTrain';

const EditTrainList = ({ list, remove }) => {
  const getList = () => {
    if (list.length !== 0) {
      return list.map((schedule) => (
        <div key={schedule.year}>
          <Link to={`/cwiczenia/edytuj/${schedule.year}`}>
            <StyledListItem>
              {`Harmonogram ćwiczeń ratowniczych na rok ${schedule.year}`}
            </StyledListItem>
          </Link>
          <i className="fas fa-trash-alt" onClick={() => remove(schedule.year)} />
        </div>
      ));
    }
    return <p>Brak harmonogramów lub wystąpił jakiś błąd.</p>;
  };
  return (
    <>
      <h1>Lista harmonogramów: </h1>
      <ul>{getList()}</ul>
    </>
  );
};
// }
const mapStateToProps = ({ trainingGroups: list }) => list;
const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(actions.remove(id)),
});

EditTrainList.propTypes = {
  list: PropTypes.array,
  remove: PropTypes.func,
};

EditTrainList.defaultProps = {
  list: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTrainList);
