import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Head extends Component {
  state = {
    from: '',
    to: ''
  };

  componentDidMount() {
    const { type, date } = this.props;
    if (type === 'update') {
      this.setState({
        from: date.from,
        to: date.to
      });
    }
  }

  handleChange = (e) => {
    const { getDate } = this.props;
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => getDate(this.state.from, this.state.to)
    );
  };

  handleView = (type) => {
    const { id, date } = this.props;
    if (type === 'create') {
      return (
        <>
          <span>Harmonogram od:</span>
          <input name="from" value={this.state.from} onChange={this.handleChange} type="date" />
          <span>do:</span>
          <input name="to" value={this.state.to} onChange={this.handleChange} type="date" />
        </>
      );
    } else if (type === 'update') {
      return (
        <>
          <span>Harmonogram od:</span>
          <input name="from" value={this.state.from} onChange={this.handleChange} type="date" />
          <span>do:</span>
          <input name="to" value={this.state.to} onChange={this.handleChange} type="date" />
        </>
      );
    } else {
      return (
        <>
          Harmonogram od {date.from} do {date.to}
          <Link key={id} to={`/harmonogram/edytuj/${id}`}>
            <i title="edytuj harmonogram" className="fas fa-edit"></i>
          </Link>
        </>
      );
    }
  };
  render() {
    const { type } = this.props;
    return <div className="title">{this.handleView(type)}</div>;
  }
}

export default Head;
