import React, { Component } from 'react';
import '../App.css';
import YoutubeResult from './YoutubeResult';
import ApiService from '../services/ApiService'

class NewTrack extends Component {
  constructor() {
    super();
    this.state = {title: '', artist: '', links: [], link_index: 0};
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeArtist = this.handleChangeArtist.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReject = this.handleReject.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.getLink = this.getLink.bind(this);
    this.api = new ApiService();
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  handleChangeArtist(event) {
    this.setState({artist: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.api.searchLink(this.state.title, this.state.artist)
      .then(result=>result.json())
      .then(item=>this.setState({links: item.links}))
  }

  handleReject(event) {
    this.setState({link_index: this.state.link_index + 1})
  }

  handleSelect(event) {
    this.api.createTrack(this.state.title, this.state.artist, this.getLink())
      .then(result=>result.json())
      .then(item=>console.log(item))
    event.preventDefault();
  }

  getLink() {
    return this.state.links[this.state.link_index % this.state.links.length];
  }

  render() {
    var result;
    if (this.state.links.length != 0) {
      result = <YoutubeResult link={this.getLink()} reject={this.handleReject} select={this.handleSelect} />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='form-field'>
            Title:
            <input className='input-field' type="text" name="title" value={this.state.title} onChange={this.handleChangeTitle}/>
          </div>
          <div className='form-field'>
            Artist:
            <input className='input-field' type="text" name="artist" value={this.state.artist} onChange={this.handleChangeArtist}/>
          </div>
          <div className='form-field'>
            <input className='submit' type="submit" value="Search"/>
          </div>
          {result}
        </form>

      </div>
    );
  }
}

export default NewTrack;
