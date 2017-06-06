import React, { Component } from 'react';
import './App.css';

const Error = (props) => (
  <div className='error-box'>
    {props.message}
  </div>
)

export default Error;
