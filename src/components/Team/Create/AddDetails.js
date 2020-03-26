import React from 'react';
import { connect } from 'react-redux';

const AddDetails = ({ rescuer, handleChange, group }) => {
  const OptionsForSelectGroupOfTraining = (group) =>
    Object.keys(group).map((group) => (
      <option key={group} value={group}>
        grupa {group}
      </option>
    ));

  const { name, surname, branch, minePosition, KSRGPosition, doctor, trainingGroup, duty, inaccessibleFrom, inaccessibleTo } = rescuer;
  return (
    <div className="details edit">
      <label>
        Imię:
        <input type="text" name="name" onChange={handleChange} value={name} />
      </label>
      <label>
        Nazwisko:
        <input type="text" name="surname" onChange={handleChange} value={surname} />
      </label>
      <label>
        Oddział:
        <input type="text" name="branch" onChange={handleChange} value={branch} />
      </label>
      <label>
        Stanowisko:
        <input type="text" name="minePosition" onChange={handleChange} value={minePosition} />
      </label>
      <label>
        Funkcja KSRG:
        <input type="text" name="KSRGPosition" onChange={handleChange} value={KSRGPosition} />
      </label>
      <label>
        Termin ważności badań:
        <input type="date" name="doctor" onChange={handleChange} value={doctor} />
      </label>
      <label>
        Grupa ćwiczeń:
        <select value={trainingGroup} name="trainingGroup" onChange={handleChange}>
          {OptionsForSelectGroupOfTraining(group)}
        </select>
      </label>
      <label>
        dyżur:
        <input type="month" name="duty" onChange={handleChange} value={duty} />
      </label>
      <label className="inaccessible">
        <span>Niedostępny</span> od:
        <input type="date" name="inaccessibleFrom" value={inaccessibleFrom} onChange={handleChange} />
        do:
        <input type="date" name="inaccessibleTo" value={inaccessibleTo} onChange={handleChange} />
      </label>
    </div>
  );
};

const mapStateToProps = ({ group }) => ({ group: group.list[0].groups });

export default connect(mapStateToProps, {})(AddDetails);
