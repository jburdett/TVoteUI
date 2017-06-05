import React, { Component } from 'react';
import '../App.css';
import ListItem from './ListItem';

class TrackList extends Component {
  constructor() {
      super();
      this.state = { items: [] };
  }

  componentDidMount() {
    fetch('/api/tracks')
      .then(result=>result.json())
      .then(items=>this.setState({items: items.data}))
  }

  render() {
    return (
      <div className="App-intro">
        <ol>
          {this.state.items.map(
            item=><ListItem key={item.id} title={item.title} artist={item.artist} link={item.link} id={item.id} />
          )}
        </ol>
      </div>
    );
  }
}

export default TrackList;
