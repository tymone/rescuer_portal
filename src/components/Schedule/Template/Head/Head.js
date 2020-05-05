import React from 'react';
import { Link } from 'react-router-dom';
import date from '../../../../helpers/setDate';

const Head = ({ type, from, to, handleChange, id }) => {
  const handleView = (type) => {
    if (type !== 'read') {
      return (
        <>
          <span>Harmonogram od:</span>
          <input name="dateFrom" value={from} onChange={handleChange} type="date" />
          <span>do:</span>
          <input name="dateTo" value={to} onChange={handleChange} type="date" />
        </>
      );
    } else {
      return (
        <>
          Harmonogram od {date(from)} do {date(to)}
          <Link key={id} to={`/harmonogram/edytuj/${id}`}>
            <i title="edytuj harmonogram" className="fas fa-edit"></i>
          </Link>
        </>
      );
    }
  };
  return <div className="title">{handleView(type)}</div>;
};
export default Head;
