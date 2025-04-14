import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Fusian</h1>
        <p className="about-subtitle">Celebrating Asian Culture Through Music</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Fusian is Harvard's premier Asian A Cappella collective, dedicated to celebrating the rich traditions and modern vibrancy of Asian culture through musical performance. We unite talented individuals who are passionate about music, creativity, and community.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We strive to create a space where cultural heritage meets contemporary artistry. Through our performances, we aim to:
          </p>
          <ul>
            <li>Showcase the diversity and beauty of Asian musical traditions</li>
            <li>Foster cultural understanding and appreciation</li>
            <li>Create meaningful connections through music</li>
            <li>Inspire the next generation of artists and performers</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Connect With Us</h2>
          <p>
            Follow our journey and experience our performances through our social media channels:
          </p>
          <div className="social-links">
            <a 
              href="https://www.facebook.com/harvardfusian/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              Facebook
            </a>
            <a 
              href="https://www.instagram.com/harvardfusian/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              Instagram
            </a>
            <a 
              href="https://www.youtube.com/@harvardfusian2807" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              Performance Videos
            </a>
          </div>
        </div>

        <div className="about-section">
          <h2>Join Our Community</h2>
          <p>
            Whether you're a performer, music enthusiast, or simply curious about Asian culture, there's a place for you in our community. Join us as we celebrate the fusion of cultural heritage and contemporary talent, where every note and every beat is a tribute to artistic excellence and the vibrant spirit of our community at Harvard.
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScHw5qqXnuN_qVf7Z0K0PAMUP2HWsIeAbq2o-IrIvjs3_CV5Q/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="join-button"
          >
            Join Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About; 