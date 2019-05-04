import React from "react";
import "../styles/User.css";

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
      <td>{user.doctor}</td>
      <td>{user.train}</td>
      <td>{user.kpp}</td>
      <td>{user.ground1}</td>
      <td>{user.ground2}</td>
      <td>{user.osrg1}</td>
      <td>{user.osrg2}</td>
      <td>{user.under1}</td>
      <td>{user.under2}</td>
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
    <table>
      <thead>
        <tr>{tableHead}</tr>
      </thead>
      <tbody>{user}</tbody>
    </table>
  );
};

export default User;
