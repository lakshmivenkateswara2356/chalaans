import React from 'react';
import readytowork from '../assets/readytowork.png'


import './ContactUs.css';

const ContactUs = () => {
  
  return (
    <div className="contact-container">
      <div className="contact-image">
        <h1 className='gooter'>Ready to work together?</h1>
      </div>
      <div className="contact-form">
        <h2>Get in touch</h2>
        <p>Our friendly team would love to hear from you.</p>
        <img src={readytowork} alt="sjdh"/>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" name="firstName" placeholder="First name" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Last name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@company.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Message" required></textarea>
          </div>
          <div className="form-group checkbox">
            <input type="checkbox" id="privacyPolicy" name="privacyPolicy" required />
            <label htmlFor="privacyPolicy">
              You agree to our friendly <a href="/privacy-policy">privacy policy</a>.
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
