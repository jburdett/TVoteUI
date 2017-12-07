import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import Home from './home/Home';
import Track from './track/Track';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="App-header">
    <Link to={"/"}>
      <img src={logo} className="App-logo" alt="logo" />
    </Link>
  </div>
)

export default Header;
