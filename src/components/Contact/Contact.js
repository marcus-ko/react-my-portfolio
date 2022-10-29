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
          alert("Thank you, we will be in touch!")
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
          <div class="contact-field">
              <label for="name">Name</label>
              <input
                type="name"
                name="to_name"
                class=""
                id="name"
                placeholder="name"
              />
          </div>

          <div class="contact-field">
              <label for="name">Email Address</label>
              <input
                type="email"
                name="reply_to"
                class=""
                id="email"
                placeholder="name@email.com"
              />
          </div>

          <div class="contact-field">
              <label for="name">Subject</label>
              <input
                type="text"
                name="from_name"
                class=""
                id="subject"
                placeholder="subject"
              />
          </div>

          <div class="contact-field">
              <label for="message">Message</label>
              <textarea
                name="message"
                class=""
                id="message"
                rows="5"
              >
              </textarea>
          </div>

          <button type="submit" class="btn-submit" value="send">
              Submit
            </button>

        </form>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
