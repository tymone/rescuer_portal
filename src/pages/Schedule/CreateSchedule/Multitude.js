import React, { Component } from 'react';

export default class Multitude extends Component {
  state = {
    user1: '',
    user2: '',
    user3: '',
    user4: '',
    user5: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  render() {
    const { name } = this.props
    return(
      <div className={`${name}`}>
        <input type="text" placeholder='nazwisko' name='user1' onChange={this.handleChange} />
        <input type="text" placeholder='nazwisko' name='user1' onChange={this.handleChange} />
        <input type="text" placeholder='nazwisko' name='user1' onChange={this.handleChange} />
        <input type="text" placeholder='nazwisko' name='user1' onChange={this.handleChange} />
        <input type="text" placeholder='nazwisko' name='user1' onChange={this.handleChange} />  
      </div>
    )
  }
}