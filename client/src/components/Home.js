import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Fusian</h1>
        <p className="subtitle">Harvard's Premiere East-Asian A Cappella Group</p>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLScHw5qqXnuN_qVf7Z0K0PAMUP2HWsIeAbq2o-IrIvjs3_CV5Q/viewform?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-join-button"
        >
          Join Us - Interest Form
        </a>
      </section>

      <section className="features">
        <div className="feature-card">
          <h2>Our Mission</h2>
          <p>Celebrating East-Asian culture through music and performance, bringing communities together through the power of song.</p>
        </div>
        <div className="feature-card">
          <h2>Upcoming Tour</h2>
          <p>We're aiming to go on tour in Asia in Winter/Summer 2026. Stay tuned for more details!</p>
        </div>
      </section>
    </div>
  );
}

export default Home; 