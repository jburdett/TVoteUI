import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import Home from './home/Home';
import Track from './track/Track';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Header = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
  </div>
)

export default Header;
