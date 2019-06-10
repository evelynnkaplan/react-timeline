import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

class App extends Component {
  render() {
    console.log(timelineData);

    const event = {
      person: "Person 1",
      status: "Hangin' out",
      timestamp: "2018-05-18T22:12:03Z",
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
          <TimelineEvent person={event.person} status={event.status} timestamp={event.timestamp} />
        </main>
      </div>
    );
  }
}

export default App;
