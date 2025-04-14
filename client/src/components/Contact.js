import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: '',
    field: '' // Which field has an error
  });

  // Improved email validation regex for proper email format.
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for the specific field being edited.
    if (status.error && status.field === name) {
      setStatus(prev => ({ ...prev, error: false, message: '', field: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate Name
    if (!formData.name.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please enter your name',
        field: 'name'
      });
      return;
    }

    // Validate Email Field
    if (!formData.email.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please enter your email address',
        field: 'email'
      });
      return;
    }
    
    if (!validateEmail(formData.email)) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please enter a valid email address (e.g., john.doe@example.com)',
        field: 'email'
      });
      return;
    }

    // Validate Message Field
    if (!formData.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please enter your message',
        field: 'message'
      });
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Your message should be at least 10 characters long',
        field: 'message'
      });
      return;
    }

    // If validations pass, mark as submitting.
    setStatus({ submitting: true, success: false, error: false, message: '', field: '' });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      };

      await emailjs.send(
        'service_zqx3ixr',
        'template_sdtnff7',
        templateParams,
        'PS73MP5iO8QciZQuO'
      );

      // On successful submission.
      setStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Message sent successfully! We will get back to you soon.',
        field: ''
      });
      // Clear the form.
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      // On failure, set the error message.
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again later.',
        field: ''
      });
    }
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">Get in touch with Fusian</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Contact Form</h2>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className={status.error && status.field === 'name' ? 'error' : ''}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className={status.error && status.field === 'email' ? 'error' : ''}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message (minimum 10 characters)"
                minLength="10"
                className={status.error && status.field === 'message' ? 'error' : ''}
              />
            </div>

            {/* Display status message if one exists */}
            {status.message && (
              <div className={`status-message ${status.success ? 'success' : 'error'}`}>
                {status.message}
              </div>
            )}

            <button 
              type="submit" 
              className="submit-button"
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;