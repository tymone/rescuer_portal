import React, { Component } from 'react';

import Group from './Group'

import '../../styles/style.css';

export default class Train extends Component {

  state = {
    groups: [
      [1577833200000, 1583017200000, 1588284000000, 1593554400000, 1598911200000, 1578697200000,],
      [1578438000000, 1583622000000, 1588888800000, 1594159200000, 1599516000000, 1604790000000],
      [1579042800000, 1584226800000, 1589493600000, 1594764000000, 1600120800000, 1605394800000],
      [1579647600000, 1584831600000, 1590098400000, 1595368800000, 1600725600000, 1605999600000],
      [1580252400000, 1585436400000, 1590703200000, 1595973600000, 1601330400000, 1606604400000],
    ],
    addGroup: false,
    numberGroup: '',
    osrg1: '',
    under1: '',
    floor1: '',
    osrg2: '',
    under2: '',
    floor2: '',
  }

  addGroupToggle = () => {
    this.setState({
      addGroup: !this.state.addGroup
    })
  }

  addGroup = () => {
    let arr = []
    const { osrg1, under1, floor1, osrg2, under2, floor2, addGroup } = this.state
    if (osrg1 && under1 && floor1 && osrg2 && under2 && floor2) {
      arr.push(new Date(osrg1).getTime(), new Date(under1).getTime(), new Date(floor1).getTime(), new Date(osrg2).getTime(), new Date(under2).getTime(), new Date(floor2).getTime())

      this.setState(prevState => ({
        addGroup: !addGroup,
        groups: [...prevState.groups, arr],
        osrg1: '',
        under1: '',
        floor1: '',
        osrg2: '',
        under2: '',
        floor2: ''
      })
      )
    }
    else {
      alert('Nie wszystkie pola zostały wypełnione.')
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { addGroup, groups } = this.state

    return (
      <div className="train">
        <div className="table">
          <div className="head">
            <span>Grupa</span>
            <span>OSRG 1</span>
            <span>Dołowe 1</span>
            <span>Powierzchnia 1</span>
            <span>OSRG 2</span>
            <span>Dołowe 2</span>
            <span>Powierzchnia 2</span>
          </div>
          <div className="body">
            <ul className='groups'>
              {this.state.groups.map((group, i) => <ul key={`group ${i}`} className='group'><Group group={group} index={i} /></ul>)}
              <ul className={addGroup ? 'show' : 'hide'}>
                <li>{groups.length + 1}</li>
                <li><input type="date" value={this.state.osrg1} onChange={this.handleChange} name={'osrg1'} /></li>
                <li><input type="date" value={this.state.under1} onChange={this.handleChange} name={'under1'} /></li>
                <li><input type="date" value={this.state.floor1} onChange={this.handleChange} name={'floor1'} /></li>
                <li><input type="date" value={this.state.osrg2} onChange={this.handleChange} name={'osrg2'} /></li>
                <li><input type="date" value={this.state.under2} onChange={this.handleChange} name={'under2'} /></li>
                <li><input type="date" value={this.state.floor2} onChange={this.handleChange} name={'floor2'} /></li>
              </ul>
            </ul>
          </div>
        </div>
        <button onClick={addGroup ? this.addGroup : this.addGroupToggle}>{addGroup ? 'Zapisz' : 'Dodaj grupę'}</button>
      </div>
    )
  }
}