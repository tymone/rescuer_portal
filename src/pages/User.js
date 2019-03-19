import React from 'react';

const User = props => {
  const user = props.user.map(user => (<tr key={user.id}>
    <th scope='row'>{user.id}</th>
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
    <td>{user.exercises.ground1}</td>
    <td>{user.exercises.ground2}</td>
    <td>{user.exercises.osrg1}</td>
    <td>{user.exercises.osrg2}</td>
    <td>{user.exercises.under1}</td>
    <td>{user.exercises.under2}</td>

  </tr>))

  return user


}

export default User;