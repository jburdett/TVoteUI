import React, { Component } from 'react';
import '../App.css';

class Track extends Component {
  constructor() {
      super();
      this.state = { title: null, artist: null, link: null };
  }

  componentDidMount() {
    fetch('/api/tracks/' + this.props.match.params.id)
      .then(result=>result.json())
      .then(item=>this.setState({ title: item.data.title, artist: item.data.artist, link: item.data.link }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.title} - {this.state.artist}</h1>
        <div className='video'>
          <iframe className='track-iframe'
            src={"https://www.youtube.com/embed/" + this.state.link}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Track;
