import React from "react";

import "../../styles/style.css";

const AddUser = props => {
  const {
    name, surname, doctor, train, kpp, ground1, ground2, osrg1, osrg2, under1, under2, change } = props;

  return (
    <tr>
      <th scope='row'>#</th>
      <td><input type="text" value={name} name="name" onChange={change} placeholder='imię' /></td>
      <td><input value={surname} name="surname" onChange={change} type="text" placeholder='Nazwisko' /></td>
      <td><input value={doctor} name="doctor" onChange={change} type="date" /></td>
      <td><input value={train} name="train" onChange={change} type="date" /></td>
      <td><input value={kpp} name="kpp" onChange={change} type="date" /></td>
      <td><input value={ground1} name="ground1" onChange={change} type="date" /></td>
      <td><input value={ground2} name="ground2" onChange={change} type="date" /></td>
      <td><input value={osrg1} name="osrg1" onChange={change} type="date" /></td>
      <td><input value={osrg2} name="osrg2" onChange={change} type="date" /></td>
      <td><input value={under1} name="under1" onChange={change} type="date" /></td>
      <td><input value={under2} name="under2" onChange={change} type="date" /></td>
    </tr>
  );
};

export default AddUser;
