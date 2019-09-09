import React, { Component } from 'react';

import Group from './Group'

import '../../styles/style.css';
import { connect } from 'react-redux';

import actions from './duck/actions'

class Train extends Component {

  state = {
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

      this.props.add(arr);

      this.setState({
        addGroup: !addGroup,
        osrg1: '',
        under1: '',
        floor1: '',
        osrg2: '',
        under2: '',
        floor2: ''
      })

    }
    else {
      alert('Nie wszystkie pola zostały wypełnione.')
    }
  }

  resetTable = () => {
    this.setState({
      groups: []
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { addGroup } = this.state

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
              {this.props.group.list.map((group, i) => <ul key={`group ${i}`} className='group'><Group group={group} index={i} /></ul>)}
              <ul className={addGroup ? 'show' : 'hide'}>
                <li>{this.props.group.list.length + 1}</li>
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
        <button onClick={this.resetTable}>Wyczyść listę</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  group: state.group
})

const mapDispatchToProps = dispatch => ({
  add: rescuer => dispatch(actions.add(rescuer))
});

export default connect(mapStateToProps, mapDispatchToProps)(Train)