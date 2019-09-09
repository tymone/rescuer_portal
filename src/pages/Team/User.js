import React from 'react';

const User = ({ user }) => {

  let date = (date) => {
    let day = new Date(date).getDate()
    let month = new Date(date).getMonth() + 1

    return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}`
  }

  return (
    <div className="user">
      <span>{user.name}</span>
      <span>{user.surname}</span>
      <span>{date(user.doctor)}</span>
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


