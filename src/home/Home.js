import React, { Component } from 'react';
import '../App.css';
import TrackList from './TrackList';
import NewTrack from './NewTrack.jsx';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Home extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab><h1>POPULAR TRACKS</h1></Tab>
          <Tab><h1>ADD NEW TRACK</h1></Tab>
          <Tab><h1>Search</h1></Tab>
        </TabList>

        <TabPanel>
          <TrackList />
        </TabPanel>
        <TabPanel>
          <NewTrack />
        </TabPanel>
        <TabPanel>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Home;
