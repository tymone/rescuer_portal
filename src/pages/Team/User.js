import React from 'react';

const User = ({ team, edit, deleteUser }) => {
  const user = team.map((user, i) => (
    <tr key={user.id}>
      <th scope='row'>{i + 1}</th>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      {/* <td>{user.stamp}</td> */}
      {/* <td>{user.comp}</td> */}
      {/* <td>{user.branch}</td> */}
      {/* <td>{user.tel}</td> */}
      {/* <td>{user.birth}</td> */}
      {/* <td>{user.join}</td> */}
      <td>{new Date(user.doctor).toLocaleString().slice(0, 5)}</td>
      <td>{new Date(user.train).toLocaleString().slice(0, 5)}</td>
      <td>{new Date(user.kpp).toLocaleString().slice(0, 10)}</td>
      <td>{new Date(user.ground1).toLocaleString().slice(0, 5)}</td>
      <td>{new Date(user.ground2).toLocaleString().slice(0, 5)}</td>
      <td>{new Date(user.osrg1).toLocaleString().slice(0, 5)}</td>
      <td>{new Date(user.osrg2).toLocaleString().slice(0, 5)}</td>
      <td>{new Date(user.under1).toLocaleString().slice(0, 5)}</td>
      <td>{new Date(user.under2).toLocaleString().slice(0, 5)}</td>
      <td>
        <i onClick={() => edit(user.id)} className='fas fa-edit' />{' '}
        <i onClick={() => deleteUser(user.id)} className='fas fa-trash' />
      </td>
    </tr>
  ));

  return <>{user}</>;
};

export default User;
