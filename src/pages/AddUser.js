import React from "react";

import "../styles/AddUser.css";

const AddUser = props => {
  const {
    name,
    surname,
    // stamp,
    // comp,
    // branch,
    // tel,
    // birth,
    // join,
    doctor,
    train,
    kpp,
    ground1,
    ground2,
    osrg1,
    osrg2,
    under1,
    under2,
    submit,
    change
  } = props;
  return (
    <div className="addUser">
      <h1>Dodaj ratownika do drużyny</h1>
      <form onSubmit={submit}>
        <label>
          Imię:
          <input
            id="name"
            type="text"
            value={name}
            name="name"
            onChange={change}
          />
        </label>
        <label>
          Nazwisko:
          <input value={surname} name="surname" onChange={change} type="text" />
        </label>
        {/* <label>
          Znaczek:
          <input value={stamp} name="stamp" onChange={change} type="text" />
        </label>
        <label>
          Nr stały:
          <input value={comp} name="comp" onChange={change} type="text" />
        </label>
        <label>
          Oddział:
          <input value={branch} name="branch" onChange={change} type="text" />
        </label>
        <label>
          Oddz. tel:
          <input value={tel} name="tel" onChange={change} type="text" />
        </label>
        <label>
          Data urodzenia:
          <input value={birth} name="birth" onChange={change} type="date" />
        </label>
        <label>
          Doł. do KSRG:
          <input value={join} name="join" onChange={change} type="date" />
        </label> */}
        <label>
          Badania:
          <input value={doctor} name="doctor" onChange={change} type="date" />
        </label>
        <label>
          Szkolenie:
          <input value={train} name="train" onChange={change} type="date" />
        </label>
        <label>
          Termin KPP:
          <input value={kpp} name="kpp" onChange={change} type="date" />
        </label>
        <label>
          Ćw. pow. 1:
          <input value={ground1} name="ground1" onChange={change} type="date" />
        </label>
        <label>
          Ćw. pow. 2:
          <input value={ground2} name="ground2" onChange={change} type="date" />
        </label>
        <label>
          Ćw. OSRG 1:
          <input value={osrg1} name="osrg1" onChange={change} type="date" />
        </label>
        <label>
          Ćw. OSRG 2:
          <input value={osrg2} name="osrg2" onChange={change} type="date" />
        </label>
        <label>
          Ćw. dół 1:
          <input value={under1} name="under1" onChange={change} type="date" />
        </label>
        <label>
          Ćw. dół 2:
          <input value={under2} name="under2" onChange={change} type="date" />
        </label>
      </form>
    </div>
  );
};

export default AddUser;
