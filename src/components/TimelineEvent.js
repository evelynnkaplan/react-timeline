import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  console.log(props.timeStamp);
  return (
    <section className="timeline-event">
      <p className="event-person">{props.person}</p>
      <p className="event-status">{props.status}</p>
      <p className="event-time"><Timestamp time={props.timeStamp}/></p>
    </section>
  );
}

export default TimelineEvent;
