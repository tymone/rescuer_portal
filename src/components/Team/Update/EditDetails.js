import React from 'react';
import { connect } from 'react-redux';

const EditDetails = ({ rescuer, handleChange, group, changeTrainingIncludeValue }) => {
  console.log(group);
  // const checkIcon = <i className="fas fa-check"></i>;
  // const uncheckIcon = <i className="fas fa-times"></i>;
  // const { name, surname, branch, minePosition, KSRGPosition, doctor, trainingGroup, included, duty, suspend } = rescuer;
  // const { osrg1, under1, ground1, osrg2, under2, ground2 } = included;

  // const OptionsForSelectGroupOfTraining = (group) =>
  //   Object.keys(group).map((group) => (
  //     <option key={group} value={group}>
  //       grupa {group}
  //     </option>
  //   ));
  return (
    <p>edit details</p>
    // <div className="details edit">
    //   <label>
    //     Imię:
    //     <input type="text" name="name" onChange={handleChange} value={name} />
    //   </label>
    //   <label>
    //     Nazwisko:
    //     <input type="text" name="surname" onChange={handleChange} value={surname} />
    //   </label>
    //   <label>
    //     Oddział:
    //     <input type="text" name="branch" onChange={handleChange} value={branch} />
    //   </label>
    //   <label>
    //     Stanowisko:
    //     <input type="text" name="minePosition" onChange={handleChange} value={minePosition} />
    //   </label>
    //   <label>
    //     Funkcja KSRG:
    //     <input type="text" name="KSRGPosition" onChange={handleChange} value={KSRGPosition} />
    //   </label>
    //   <label>
    //     Termin ważności badań:
    //     <input type="date" name="doctor" onChange={handleChange} value={doctor} />
    //   </label>
    //   <label>
    //     Grupa ćwiczeń:
    //     <select value={trainingGroup} name="trainingGroup" onChange={handleChange}>
    //       {OptionsForSelectGroupOfTraining(group)}
    //     </select>
    //   </label>
    //   <label>
    //     Zaliczone ćwiczenia:
    //     <div className="trainingTable">
    //       <ul className="head">
    //         <li>osrg 1</li>
    //         <li>doł. 1</li>
    //         <li>pow. 1</li>
    //         <li>osrg 2</li>
    //         <li>doł. 2</li>
    //         <li>pow. 2</li>
    //       </ul>
    //       <ul className="body">
    //         <li onClick={() => changeTrainingIncludeValue('osrg1')}>{osrg1 ? checkIcon : uncheckIcon}</li>
    //         <li onClick={() => changeTrainingIncludeValue('under1')}>{under1 ? checkIcon : uncheckIcon}</li>
    //         <li onClick={() => changeTrainingIncludeValue('ground1')}>{ground1 ? checkIcon : uncheckIcon}</li>
    //         <li onClick={() => changeTrainingIncludeValue('osrg2')}>{osrg2 ? checkIcon : uncheckIcon}</li>
    //         <li onClick={() => changeTrainingIncludeValue('under2')}>{under2 ? checkIcon : uncheckIcon}</li>
    //         <li onClick={() => changeTrainingIncludeValue('ground2')}>{ground2 ? checkIcon : uncheckIcon}</li>
    //       </ul>
    //     </div>
    //   </label>
    //   <label>
    //     dyżur:
    //     <input type="text" name="duty" onChange={handleChange} value={duty} />
    //   </label>
    //   <label>
    //     Zawieszony:
    //     <select value={suspend} name="suspend" onChange={handleChange}>
    //       <option value={false}>Nie</option>
    //       <option value={true}>Tak</option>
    //     </select>
    //   </label>
    // </div>
  );
};

const mapStateToProps = ({ group }) => ({ group: group });

export default connect(mapStateToProps, {})(EditDetails);
