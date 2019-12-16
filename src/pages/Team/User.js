import React from "react";

import date from "../../helpers/setDate";

const User = ({ user }) => {
  const { name, surname, doctor, train } = user;
  return (
    <div className="user">
      <span>{name}</span>
      <span>{surname}</span>
      <span>{date(doctor)}</span>
      <span>{train}</span>
    </div>
  );
};

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
