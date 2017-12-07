import React, { Component } from 'react';
import './App.css';
import Home from './home/Home';
import Track from './track/Track';
import Header from './Header';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/track/:id" component={Track} />
      </div>
    </Router >
  </div>
)

export default App;
