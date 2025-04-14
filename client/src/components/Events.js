import React from 'react';
import './Events.css';

function Events() {
  return (
    <div className="events">
      <section className="events-hero">
        <h1>Upcoming Events</h1>
        <p className="subtitle">Stay tuned for our upcoming performances</p>
      </section>

      <section className="events-content">
        <div className="no-events">
          <h2>No events currently scheduled</h2>
          <p>We're working on planning our next performances. Check back soon for updates!</p>
        </div>
      </section>
    </div>
  );
}

export default Events; 