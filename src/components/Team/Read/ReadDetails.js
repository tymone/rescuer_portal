import React from 'react';

const ReadDetails = ({
  rescuer: { name, surname, branch, minePosition, KSRGPosition, doctor, trainingGroup, included, duty, suspend }
}) => {
  const checkIcon = <i className="fas fa-check"></i>;
  const uncheckIcon = <i className="fas fa-times"></i>;
  return (
    <div className="details read">
      <label>
        Imię:
        <input type="text" value={name} readOnly disabled />
      </label>
      <label>
        Nazwisko:
        <input type="text" value={surname} disabled readOnly />
      </label>
      <label>
        Oddział:
        <input type="text" value={branch} disabled readOnly />
      </label>
      <label>
        Stanowisko:
        <input type="text" value={minePosition} disabled readOnly />
      </label>
      <label>
        Funkcja KSRG:
        <input type="text" value={KSRGPosition} disabled readOnly />
      </label>
      <label>
        Termin ważności badań:
        <input type="text" value={doctor} disabled readOnly />
      </label>
      <label>
        Grupa ćwiczeń:
        <input type="text" value={`grupa ${trainingGroup}`} disabled readOnly />
      </label>
      <label>
        Zaliczone ćwiczenia:
        <div className="trainingTable">
          <ul className="head">
            <li>osrg 1</li>
            <li>doł. 1</li>
            <li>pow. 1</li>
            <li>osrg 2</li>
            <li>doł. 2</li>
            <li>pow. 2</li>
          </ul>
          <ul className="body">
            <li>{included.osrg1 ? checkIcon : uncheckIcon}</li>
            <li>{included.under1 ? checkIcon : uncheckIcon}</li>
            <li>{included.ground1 ? checkIcon : uncheckIcon}</li>
            <li>{included.osrg2 ? checkIcon : uncheckIcon}</li>
            <li>{included.under2 ? checkIcon : uncheckIcon}</li>
            <li>{included.ground2 ? checkIcon : uncheckIcon}</li>
          </ul>
        </div>
      </label>
      <label>
        dyżur:
        <input type="text" value={duty} disabled readOnly />
      </label>
      <label>
        Zawieszony:
        <input type="text" value={suspend ? 'Tak' : 'Nie'} disabled readOnly />
      </label>
    </div>
  );
};

export default ReadDetails;
