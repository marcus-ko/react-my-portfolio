import React from 'react'
import {useState} from 'react'
import emailjs from '@emailjs/browser';
import {useRef} from 'react'
import './Contact.scss'
import Footer from "../Home/Footer"

export const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_USER_ID,
    )
      .then((result) => {
          console.log(result.text);
          setSubmitted(true)
          // alert("Thank you, we will be in touch!")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <div className="card-container">
      <p className="card-heading">Contact me</p>
      <div className="contact-wrapper">
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact-field">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                name="to_name"
                id="name"
                placeholder="name"
              />
          </div>

          <div className="contact-field">
              <label htmlFor="name">Email Address</label>
              <input
                type="email"
                name="reply_to"
                id="email"
                placeholder="name@email.com"
              />
          </div>

          <div className="contact-field">
              <label htmlFor="name">Subject</label>
              <input
                type="text"
                name="from_name"
                id="subject"
                placeholder="subject"
              />
          </div>

          <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
              >
              </textarea>
          </div>

          <button type="submit" className="btn-submit" value="send">
              Submit
            </button>
          <div>
          <p className={`contact-message ${submitted ? "contact-message-active" :""}`}>Your message has been sent, thank you.</p>

          </div>
        </form>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
