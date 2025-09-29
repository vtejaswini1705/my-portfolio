import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            I’m open to discussing data engineering roles, projects, and collaborations.
            Let’s connect!
          </p>
          <p className="email-display">
            📧 <a href="mailto:vtejaswini1705@gmail.com">vtejaswini1705@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
