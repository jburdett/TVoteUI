import React, { Component } from 'react';
import '../App.css';
import thumbs_up from '../assets/black-thumb.png';
import thumbs_down from '../assets/thumb-down.png';

const YoutubeResult = (props) => (
  <div className='youtube-result'>
    <div>
      <iframe className='result-iframe'
        src={"https://www.youtube.com/embed/" + props.link}
        allowFullScreen
      ></iframe>
    </div>
    <div className='select-button accept' onClick={props.select}>
      <img src={thumbs_up} />
    </div>
    <div className='select-button reject' onClick={props.reject}>
      <img src={thumbs_down} />
    </div>
  </div>
)

export default YoutubeResult;
