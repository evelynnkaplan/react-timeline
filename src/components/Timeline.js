import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (eventsList) => {
  const timelineEvents = [];

  console.log(eventsList);

   eventsList.events.forEach((event, i) => {
    timelineEvents.push(<TimelineEvent 
    key={i} 
    person={event.person}
    status={event.status}
    timestamp={event.timestamp} 
    />);
    })

  return (
    <section className="timeline">
      {timelineEvents}
    </section>
  )
};

export default Timeline;
