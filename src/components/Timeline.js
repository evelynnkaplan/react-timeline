import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineEvents = [];

   props.events.forEach((event, i) => {
    timelineEvents.push(<TimelineEvent 
    key={i} 
    person={event.person}
    status={event.status}
    timeStamp={event.timeStamp} 
    />);
    })

  return (
    <section className="timeline">
      {timelineEvents}
    </section>
  )
};

export default Timeline;
