import React from 'react';

const Head = ({ type }) => (
  <ul className="head">
    {type === 'details' ? (
      <>
        <li>Imię</li>
        <li>Nazwisko</li>
        <li>Oddział</li>
      </>
    ) : (
      <li>Grupa</li>
    )}
    <li>OSRG 1</li>
    <li>Dołowe 1</li>
    <li>Powierzchnia 1</li>
    <li>OSRG 2</li>
    <li>Dołowe 2</li>
    <li>Powierzchnia 2</li>
    {type === 'details' ? null : <li>Opcje</li>}
  </ul>
);

export default Head;
