import React from 'react';
import './styles/ContactUs.scss';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault(alert("hello"));
    // Implement your form submission logic here
    // You can fetch input values or perform other actions upon form submission
  };

  return (
    <div className='contactus'>
      <div className='contact-banner'>
        <h1>Contact Us</h1>
        <p><Link to='/' className='goback-home'>Home</Link> {'>'} <Link to=''>Contact Us</Link></p>
      </div>

      <div className='contactus-heading'>
        <h1>Get In Touch</h1>
        <p>Do you have anything in your mind to let us know? Kindly don't delay to connect to us by means of our contact form.</p>
      </div>

      <div className='contact-card-menu'>
        <div className='contact-form'>
          <form className='form' onSubmit={handleSubmit}>
            <input type='text' className='fullname' placeholder='Enter Full Name' />
            <br />
            <input type='email' className='email' placeholder='Email Address' />
            <br />
            <input type='tel' className='phone' placeholder='Phone Number' pattern="[0-9]{10,}" title="Please enter a 10-digit phone number" />
            <br />
            <textarea className='message' placeholder='Your Message'></textarea>
            <br />
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>

        <div className='contact-infomation'>
          <p><strong>Address : </strong><br /><br />54B, Tailstoi Town 5238<br /> La city, IA 522364</p>
          <br />
          <p><strong>Phone : </strong>01372.466.790</p>
          <p><strong>Email : </strong> info@justshoppe.com</p>
          <br />
          <p>
            <strong>Opening Hours : </strong><br /><br />01372.466.790
            <br />8:00 AM – 10:00 PM Monday – Sunday
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
