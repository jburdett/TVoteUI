import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class ListItem extends Component {
  render() {
    return (
      <li key={this.props.id}>
        <div className='title'>{this.props.title}</div>
        <div className='artist'>{this.props.artist}</div>
        <div className='link'><Link to={"/track/" + this.props.id}>View</Link></div>
      </li>
    );
  }
}

export default ListItem;
