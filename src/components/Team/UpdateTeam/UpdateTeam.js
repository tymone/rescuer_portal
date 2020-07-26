import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from 'data/actions/team.actions';

import RescuerTemplate from '../Template/Rescuer/RescuerTemplate';

const UpdateTeam = ({ history, team, match, update, remove }) => {
  let rescuer = team.find((rescuer) => rescuer.id === Number(match.params.id));

  const getRescuer = (newRescuer) => (rescuer = newRescuer);

  const handleRemove = () => {
    remove(rescuer.id);
    history.push('/druzyna');
  };

  const handleSubmit = () => {
    update(rescuer);
    history.push('/druzyna');
  };

  return (
    <>
      <h1>Tryb edycji</h1>
      <RescuerTemplate type="update" rescuer={rescuer} getRescuer={getRescuer} />
      <div className="options">
        <i className="fas fa-chevron-left" onClick={history.goBack} />
        <i className="fas fa-user-check" title="zapisz zmiany" onClick={handleSubmit} />
        <i className="fas fa-user-times" title="usuń ratownika" onClick={handleRemove} />
      </div>
    </>
  );
};

const mapStateToProps = ({ team }) => ({ team: team.list });

const mapDispatchToProps = (dispatch) => ({
  update: (updatedRescuer) => dispatch(actions.update(updatedRescuer)),
  remove: (id) => dispatch(actions.remove(id)),
});

UpdateTeam.propTypes = {
  history: PropTypes.object,
  team: PropTypes.array,
  match: PropTypes.object,
  update: PropTypes.func,
  remove: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTeam);
