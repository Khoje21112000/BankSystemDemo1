import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_ylpqctv', 'template_3ppds8q', form.current, {
      publicKey: 'j-qC8kSsHZHwgp5ai',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2><br/>
      <form ref={form} onSubmit={sendEmail}> 
        <div className="mb-3">
          <input type="text" name="user_name" className="form-control" id="name" placeholder='Name'/>
        </div>
        <div className="mb-3">
          <input type="email" name="user_email" className="form-control" id="email" placeholder='Email'/>
        </div>
        <div className="mb-3">
          <textarea name="message" className="form-control" id="message" rows="4" placeholder='Message'></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Feedback
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
