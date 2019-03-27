import React from 'react';

const User = props => {
  const user = props.user.map((user, i) => (
    <tr key={i}>
      <th scope='row'>{i}</th>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.stamp}</td>
      <td>{user.comp}</td>
      <td>{user.branch}</td>
      <td>{user.tel}</td>
      <td>{user.birth}</td>
      <td>{user.join}</td>
      <td>{user.doctor}</td>
      <td>{user.train}</td>
      <td>{user.kpp}</td>
      <td>{user.ground1}</td>
      <td>{user.ground2}</td>
      <td>{user.osrg1}</td>
      <td>{user.osrg2}</td>
      <td>{user.under1}</td>
      <td>{user.under2}</td>

    </tr>))

  return (
    <table className='table table-striped table-hover table-bordered'><thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Imię</th>
        <th scope='col'>Nazwisko</th>
        <th scope='col'>Znaczek</th>
        <th scope='col'>Numer stały</th>
        <th scope='col'>Oddział</th>
        <th scope='col'>Oddz. tel</th>
        <th scope='col'>Data urodzenia</th>
        <th scope='col'>Doł. do KSRG</th>
        <th scope='col'>Badania</th>
        <th scope='col'>Szkolenie</th>
        <th scope='col'>Termin KPP</th>
        <th scope='col'>Ćw. pow1</th>
        <th scope='col'>Ćw. pow2</th>
        <th scope='col'>Ćw. OSRG1</th>
        <th scope='col'>Ćw. OSRG2</th>
        <th scope='col'>Ćw. dół1</th>
        <th scope='col'>Ćw. dół2</th>
      </tr>
    </thead>
      <tbody>
        {user}
      </tbody>

    </table>
  )


}

export default User;