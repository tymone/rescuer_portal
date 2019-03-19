import React, { Component } from 'react';

class Navbar extends Component {
  state = {
    date: ''
  }

  handleDate = () => {
    const date = new Date().toLocaleTimeString()
    this.setState({
      date
    })
  }

  componentDidMount() {
    this.date = setInterval(this.handleDate, 1000)
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div>{this.state.date}</div>
        <div>Wyloguj</div>
      </nav>
    );
  }
}

export default Navbar;