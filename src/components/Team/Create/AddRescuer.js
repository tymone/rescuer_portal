import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RescuerTemplate from '../Template/Rescuer/RescuerTemplate';
import actions from '../duck/actions';

const AddRescuer = ({ history, add }) => {
  let rescuer = {};

  const getRescuer = (newRescuer) => (rescuer = newRescuer);
  const submit = () => {
    add(rescuer);
    history.push('/druzyna');
  };

  return (
    <>
      <h1>Dodaj ratownika</h1>
      <RescuerTemplate type="create" rescuer={rescuer} getRescuer={getRescuer} />
      <div className="options">
        <i className="fas fa-chevron-left" onClick={history.goBack} />
        <i className="fas fa-user-check" onClick={submit} />
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  add: (newRescuer) => dispatch(actions.add(newRescuer)),
});

AddRescuer.propTypes = {
  history: PropTypes.object,
  add: PropTypes.func,
};
export default connect(null, mapDispatchToProps)(AddRescuer);
