import React from 'react';

const AddUser = (props) => {

  const { name, surname, stamp, comp, branch, tel, birth, join, doctor, train, kpp, ground1, ground2, osrg1, osrg2, under1, under2, submit, change } = props
  return (
    <div className='container'>
      <div className="jumbotron">
        <h5 className="display-4 text-center">Dodaj ratownika do drużyny</h5>
        <hr />
        <form onSubmit={submit} className='text-center'>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label'>Imię: </label>
            <input className='col-sm-2' id='name' type="text" value={name} name='name' onChange={change} />
            <label className='col-sm-2 col-form-label'>Nazwisko:  </label>
            <input className='col-sm-2' value={surname} name='surname' onChange={change} type="text" />
            <label className='col-sm-2 col-form-label'>Znaczek: </label>
            <input className='col-sm-2' value={stamp} name='stamp' onChange={change} type="text" />
          </div>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label'>Nr stały: </label>
            <input className='col-sm-2' value={comp} name='comp' onChange={change} type="text" />
            <label className='col-sm-2 col-form-label'>Oddział: </label>
            <input className='col-sm-2' value={branch} name='branch' onChange={change} type="text" />
            <label className='col-sm-2 col-form-label'>Oddz. tel: </label>
            <input className='col-sm-2' value={tel} name='tel' onChange={change} type="text" />
          </div>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label'>Data urodzenia:  </label>
            <input className='col-sm-2' value={birth} name='birth' onChange={change} type="date" />
            <label className='col-sm-2 col-form-label'>Doł. do KSRG: </label>
            <input className='col-sm-2' value={join} name='join' onChange={change} type="date" />
            <label className='col-sm-2 col-form-label'>Badania:  </label>
            <input className='col-sm-2' value={doctor} name='doctor' onChange={change} type="date" />
          </div>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label'>Szkolenie: </label>
            <input className='col-sm-2' value={train} name='train' onChange={change} type="date" />
            <label className='col-sm-2 col-form-label'>Termin KPP: </label>
            <input className='col-sm-2' value={kpp} name='kpp' onChange={change} type="date" />
            <label className='col-sm-2 col-form-label'>Ćw. powierzchnia 1: </label>
            <input className='col-sm-2' value={ground1} name='ground1' onChange={change} type="date" />
          </div>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label'>Ćw. powierzchnia 2: </label>
            <input className='col-sm-2' value={ground2} name='ground2' onChange={change} type="date" />
            <label className='col-sm-2 col-form-label'>Ćw. OSRG 1: </label>
            <input className='col-sm-2' value={osrg1} name='osrg1' onChange={change} type="date" />
            <label className='col-sm-2 col-form-label'>Ćw. OSRG 2:</label>
            <input className='col-sm-2' value={osrg2} name='osrg2' onChange={change} type="date" />
          </div>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label'>Ćw. dołowe 1: </label>
            <input className='col-sm-2' value={under1} name='under1' onChange={change} type="date" />
            <label className='col-sm-2 col-form-label'>Ćw. dołowe 2: </label>
            <input className='col-sm-2' value={under2} name='under2' onChange={change} type="date" />
          </div>
        </form>
      </div>
    </div>
  );
}


export default AddUser;