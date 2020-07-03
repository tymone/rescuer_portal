import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { StyledSide, StyledSpanValue, StyledInput, StyledIcon } from '../StyledRescuer';

const Values = ({ rescuer, handleChange, groups, handleToggle }) => {
  const setStyledInput = (value = '-', name, typeOfDate) => (
    <StyledInput
      type="text"
      value={value}
      name={name}
      onChange={handleChange}
      onFocus={typeOfDate ? (e) => (e.target.type = typeOfDate) : null}
    />
  );

  return (
    <StyledSide>
      {setStyledInput(rescuer.name, 'name')}
      {setStyledInput(rescuer.surname, 'surname')}
      {setStyledInput(rescuer.branch, 'branch')}
      {setStyledInput(rescuer.minePosition, 'minePosition')}
      {setStyledInput(rescuer.KSRGPosition, 'KSRGPosition')}
      {setStyledInput(rescuer.doctor, 'doctor', 'date')}
      <StyledSpanValue>
        <select value={rescuer.trainingGroup} name="trainingGroup" onChange={handleChange}>
          {Object.keys(groups).map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </StyledSpanValue>
      {setStyledInput(rescuer.duty, 'duty', 'month')}
      <StyledSpanValue>
        {setStyledInput(rescuer.inaccessibleFrom, 'inaccessibleFrom', 'date')}
        {'do: '}
        {setStyledInput(rescuer.inaccessibleTo, 'inaccessibleTo', 'date')}
      </StyledSpanValue>
      <StyledSpanValue>
        <select value={rescuer.suspend} name="suspend" onChange={handleChange}>
          <option value="yes">tak</option>
          <option value="no">nie</option>
        </select>
      </StyledSpanValue>
      <StyledSpanValue>
        {'osrg: '}
        <StyledIcon className={`fas fa-${rescuer.osrg1 ? 'check' : 'times'}`} onClick={() => handleToggle('osrg1')} />
        <StyledIcon className={`fas fa-${rescuer.osrg2 ? 'check' : 'times'}`} onClick={() => handleToggle('osrg2')} />
        {'dołowe: '}
        <StyledIcon className={`fas fa-${rescuer.under1 ? 'check' : 'times'}`} onClick={() => handleToggle('under1')} />
        <StyledIcon className={`fas fa-${rescuer.under2 ? 'check' : 'times'}`} onClick={() => handleToggle('under2')} />
        {'powierzchnia: '}
        <StyledIcon className={`fas fa-${rescuer.ground1 ? 'check' : 'times'}`} onClick={() => handleToggle('ground1')} />
        <StyledIcon className={`fas fa-${rescuer.ground2 ? 'check' : 'times'}`} onClick={() => handleToggle('ground2')} />
      </StyledSpanValue>
    </StyledSide>
  );
};

const mapStateToProps = ({ trainingGroups }) => ({ groups: trainingGroups.list[0].groups });

Values.propTypes = {
  rescuer: PropTypes.object,
  handleChange: PropTypes.func,
  groups: PropTypes.object,
  handleToggle: PropTypes.func,
};

export default connect(mapStateToProps)(Values);
