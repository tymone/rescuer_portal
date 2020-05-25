import React from 'react';

import {
  StyledReadDetails,
  StyledLabel,
  StyledReadInput,
  StyledTrainingTableWrapper,
  StyledTrainingTable,
  StyledTrainingTableBody,
} from './StyledReadTeam';

const ReadDetails = ({
  rescuer: { name, surname, branch, minePosition, KSRGPosition, doctor, trainingGroup, included, duty, suspend },
}) => {
  const checkIcon = <i className="fas fa-check"></i>;
  const uncheckIcon = <i className="fas fa-times"></i>;
  return (
    <StyledReadDetails>
      <StyledLabel>
        Imię:
        <StyledReadInput type="text" value={name} readOnly disabled />
      </StyledLabel>
      <StyledLabel>
        Nazwisko:
        <StyledReadInput type="text" value={surname} disabled readOnly />
      </StyledLabel>
      <StyledLabel>
        Oddział:
        <StyledReadInput type="text" value={branch} disabled readOnly />
      </StyledLabel>
      <StyledLabel>
        Stanowisko:
        <StyledReadInput type="text" value={minePosition} disabled readOnly />
      </StyledLabel>
      <StyledLabel>
        Funkcja KSRG:
        <StyledReadInput type="text" value={KSRGPosition} disabled readOnly />
      </StyledLabel>
      <StyledLabel>
        Termin ważności badań:
        <StyledReadInput type="text" value={doctor} disabled readOnly />
      </StyledLabel>
      <StyledLabel>
        Grupa ćwiczeń:
        <StyledReadInput type="text" value={`grupa ${trainingGroup}`} disabled readOnly />
      </StyledLabel>
      <StyledLabel>
        Zaliczone ćwiczenia:
        <StyledTrainingTableWrapper>
          <StyledTrainingTable>
            <li>osrg 1</li>
            <li>doł. 1</li>
            <li>pow. 1</li>
            <li>osrg 2</li>
            <li>doł. 2</li>
            <li>pow. 2</li>
          </StyledTrainingTable>
          <StyledTrainingTableBody>
            <li>{included.osrg1 ? checkIcon : uncheckIcon}</li>
            <li>{included.under1 ? checkIcon : uncheckIcon}</li>
            <li>{included.ground1 ? checkIcon : uncheckIcon}</li>
            <li>{included.osrg2 ? checkIcon : uncheckIcon}</li>
            <li>{included.under2 ? checkIcon : uncheckIcon}</li>
            <li>{included.ground2 ? checkIcon : uncheckIcon}</li>
          </StyledTrainingTableBody>
        </StyledTrainingTableWrapper>
      </StyledLabel>
      <StyledLabel>
        dyżur:
        <StyledReadInput type="text" value={duty} disabled readOnly />
      </StyledLabel>
      <StyledLabel>
        Zawieszony:
        <StyledReadInput type="text" value={suspend ? 'Tak' : 'Nie'} disabled readOnly />
      </StyledLabel>
    </StyledReadDetails>
  );
};

export default ReadDetails;
