import React from 'react';

const User = ({ user }) => {

  return (
    <div className="user">
      <span>{user.name}</span>
      <span>{user.surname}</span>
      <span>{new Date(user.doctor).toLocaleString().slice(0, 10)}</span>
      <span>{user.train}</span>
    </div>
  )
}
export default User;
// const User = ({ team, edit, deleteUser }) => {
//   const user = team.map((user, i) => (
//     <tr key={user.id}>
//       <th scope='row'>{i + 1}</th>
//       <td>{user.name}</td>
//       <td>{user.surname}</td>
//       <td>{new Date(user.doctor).toLocaleString().slice(0, 5)}</td>
//       <td>{}</td>

//       <td>
//         <i onClick={() => edit(user.id)} className='fas fa-edit' />{' '}
//         <i onClick={() => deleteUser(user.id)} className='fas fa-trash' />
//       </td>
//     </tr>
//   ));

//   return <>{user}</>;
// };


