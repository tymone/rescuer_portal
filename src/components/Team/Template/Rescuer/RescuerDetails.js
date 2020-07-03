import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import date from 'helpers/setDate';
import { StyledWrapper, StyledSide, StyledSpanValue, StyledIcon } from './StyledRescuer';
import { Title } from './Details';

const RescuerDetails = ({ team, match, history }) => {
  const {
    params: { id },
  } = match;
  const rescuer = team.find((rescuer) => rescuer.id === Number(id));
  const {
    name,
    surname,
    branch,
    minePosition,
    KSRGPosition,
    doctor,
    trainingGroup,
    duty,
    inaccessible: { from, to },
    suspend,
    included,
  } = rescuer;
  return (
    <>
      <h1>Szczegółowe informacje</h1>
      <StyledWrapper>
        <Title />
        <StyledSide>
          <StyledSpanValue>{name}</StyledSpanValue>
          <StyledSpanValue>{surname}</StyledSpanValue>
          <StyledSpanValue>{branch}</StyledSpanValue>
          <StyledSpanValue>{minePosition}</StyledSpanValue>
          <StyledSpanValue>{KSRGPosition}</StyledSpanValue>
          <StyledSpanValue>{date(doctor)}</StyledSpanValue>
          <StyledSpanValue>{trainingGroup}</StyledSpanValue>
          <StyledSpanValue>{duty ? date(duty) : '-'}</StyledSpanValue>
          <StyledSpanValue>
            {from || ' - '}
            do:
            {to || ' - '}
          </StyledSpanValue>
          <StyledSpanValue>{suspend ? 'tak' : '-'}</StyledSpanValue>
          <StyledSpanValue>
            {'osrg: '}
            <StyledIcon className={`fas fa-${included.osrg1 ? 'check' : 'times'}`} />
            <StyledIcon className={`fas fa-${included.osrg2 ? 'check' : 'times'}`} />
            {'dołowe: '}
            <StyledIcon className={`fas fa-${included.under1 ? 'check' : 'times'}`} />
            <StyledIcon className={`fas fa-${included.under2 ? 'check' : 'times'}`} />
            {'powierzchnia: '}
            <StyledIcon className={`fas fa-${included.ground1 ? 'check' : 'times'}`} />
            <StyledIcon className={`fas fa-${included.ground2 ? 'check' : 'times'}`} />
          </StyledSpanValue>
        </StyledSide>
      </StyledWrapper>
      <div className="options">
        <i className="fas fa-chevron-left" onClick={history.goBack} />
        <Link to={`/druzyna/edytuj/${id}`}>
          <i className="fas fa-user-edit" />
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = ({ team }) => ({ team: team.list });

RescuerDetails.propTypes = {
  team: PropTypes.array,
  match: PropTypes.object,
  history: PropTypes.object,
};

export default connect(mapStateToProps)(RescuerDetails);
