import React from "react";
import "../styles/style.css";

const User = props => {
  const user = props.user.map((user, i) => (
    <tr key={i + 1}>
      <th scope="row">{i + 1}</th>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      {/* <td>{user.stamp}</td> */}
      {/* <td>{user.comp}</td> */}
      {/* <td>{user.branch}</td> */}
      {/* <td>{user.tel}</td> */}
      {/* <td>{user.birth}</td> */}
      {/* <td>{user.join}</td> */}
      <td>{user.doctor.slice(0, 10)}</td>
      <td>{user.train.slice(0, 10)}</td>
      <td>{user.kpp.slice(0, 10)}</td>
      <td>{user.ground1.slice(0, 10)}</td>
      <td>{user.ground2.slice(0, 10)}</td>
      <td>{user.osrg1.slice(0, 10)}</td>
      <td>{user.osrg2.slice(0, 10)}</td>
      <td>{user.under1.slice(0, 10)}</td>
      <td>{user.under2.slice(0, 10)}</td>
    </tr>
  ));

  const tableHeadValue = [
    "#",
    "Imię",
    "Nazwisko",
    // "Znaczek",
    // "Numer Stały",
    // "Oddział",
    // "Oddz. tel",
    // "Data urodzenia",
    // "Doł. do KSRG",
    "Badania",
    "Szkolenie",
    "Termin KPP",
    "Ćw. pow1",
    "Ćw. pow2",
    "Ćw. OSRG1",
    "Ćw. OSRG2",
    "Ćw. doł1",
    "Ćw. doł2"
  ];
  const tableHead = tableHeadValue.map((value, i) => <th key={i}>{value}</th>);

  return (
    <table className='user'>
      <thead>
        <tr>{tableHead}</tr>
      </thead>
      <tbody>{user}</tbody>
    </table>
  );
};

export default User;
