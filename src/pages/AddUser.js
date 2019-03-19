import React, { Component } from 'react';
// import { addUser } from './Team';


class AddUser extends Component {
  state = {
    name: '',
    surname: '',
    stamp: '',
    comp: '',
    branch: '',
    tel: '',
    birth: '',
    join: '',
    doctor: '',
    train: '',
    kpp: '',
    ground1: '',
    ground2: '',
    osrg1: '',
    osrg2: '',
    under1: '',
    under2: ''

  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
    // const { name, surname, stamp, comp, branch, tel, birth, join, doctor, train, kpp, ground1, ground2, osrg1, osrg2, under1, under2 } = this.state;
    // addUser(name, surname, stamp, comp, branch, tel, birth, join, doctor, train, kpp, ground1, ground2, osrg1, osrg2, under1, under2)
    // console.log(this.state.name)
  }

  render() {
    return (
      <div className='container'>
        <div className="jumbotron">
          <h5 className="display-4 text-center">Dodaj ratownika do drużyny</h5>
          <hr />
          <form onSubmit={this.handleSubmit} className='text-center'>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Imię: </label>
              <input className='col-sm-2' id='name' type="text" value={this.state.name} name='name' onChange={this.handleChange} />
              <label className='col-sm-2 col-form-label'>Nazwisko:  </label>
              <input className='col-sm-2' value={this.state.surname} name='surname' onChange={this.handleChange} type="text" />
              <label className='col-sm-2 col-form-label'>Znaczek: </label>
              <input className='col-sm-2' value={this.state.stamp} name='stamp' onChange={this.handleChange} type="text" />
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Nr stały: </label>
              <input className='col-sm-2' value={this.state.comp} name='comp' onChange={this.handleChange} type="text" />
              <label className='col-sm-2 col-form-label'>Oddział: </label>
              <input className='col-sm-2' value={this.state.branch} name='branch' onChange={this.handleChange} type="text" />
              <label className='col-sm-2 col-form-label'>Oddz. tel: </label>
              <input className='col-sm-2' value={this.state.tel} name='tel' onChange={this.handleChange} type="text" />
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Data urodzenia:  </label>
              <input className='col-sm-2' value={this.state.birth} name='birth' onChange={this.handleChange} type="date" />
              <label className='col-sm-2 col-form-label'>Doł. do KSRG: </label>
              <input className='col-sm-2' value={this.state.join} name='join' onChange={this.handleChange} type="date" />
              <label className='col-sm-2 col-form-label'>Badania:  </label>
              <input className='col-sm-2' value={this.state.doctor} name='doctor' onChange={this.handleChange} type="date" />
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Szkolenie: </label>
              <input className='col-sm-2' value={this.state.train} name='train' onChange={this.handleChange} type="date" />
              <label className='col-sm-2 col-form-label'>Termin KPP: </label>
              <input className='col-sm-2' value={this.state.kpp} name='kpp' onChange={this.handleChange} type="date" />
              <label className='col-sm-2 col-form-label'>Ćw. powierzchnia 1: </label>
              <input className='col-sm-2' value={this.state.ground1} name='ground1' onChange={this.handleChange} type="date" />
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Ćw. powierzchnia 2: </label>
              <input className='col-sm-2' value={this.state.ground2} name='ground2' onChange={this.handleChange} type="date" />
              <label className='col-sm-2 col-form-label'>Ćw. OSRG 1: </label>
              <input className='col-sm-2' value={this.state.osrg1} name='osrg1' onChange={this.handleChange} type="date" />
              <label className='col-sm-2 col-form-label'>Ćw. OSRG 2:</label>
              <input className='col-sm-2' value={this.state.osrg2} name='osrg2' onChange={this.handleChange} type="date" />
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Ćw. dołowe 1: </label>
              <input className='col-sm-2' value={this.state.under1} name='under1' onChange={this.handleChange} type="date" />
              <label className='col-sm-2 col-form-label'>Ćw. dołowe 2: </label>
              <input className='col-sm-2' value={this.state.under2} name='under2' onChange={this.handleChange} type="date" />
            </div>
            <button className='btn btn-primary'>Dodaj</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddUser;