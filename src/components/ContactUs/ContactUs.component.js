import React, {  useRef } from "react";
import emailjs from '@emailjs/browser';
import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";
import './ContactUs.styles.css';
import emailIcon from '../../assets/icons/email.png';
import contactImage from '../../assets/contactUs.jpg';
import website from '../../assets/icons/website.png';
import linkedln from '../../assets/icons/linkedln2.png';
// import Modal from "../Modal/Modal.component";


const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gowpr28', 'template_3xsq363', form.current, '2HO0CR_39dcdX0mcN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-container">
      <Header />
      <main className="contact-us-wrapper">
        <div className="contact-us-image-container">
          <img src={contactImage} className="contact-us-image" alt="contact" />
        </div>
        <div className="contact-us-container">
          <h1 className="contact-us-heading">Get In Touch</h1>
          <div className="konsultx-email">
            <img src={emailIcon} alt="email" className="konsultx-email-icon" />
            <span className="konsultx-span">konsultx@gmail.com</span>
          </div>
          <p className="contact-us-para">-OR-</p>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <input
                className="form-input"
                placeholder="Full Name"
                type="text"
                name="from_name"
              />
              <span className="text-danger"> </span>
            </div>
            <div>
              <input
                className="form-input"
                placeholder="Email"
                type="email"
                name="from_email"
              />
              <span className="text-danger">  </span>
            </div>

            <textarea
              rows="4"
              className="form-input form-textarea"
              placeholder="Message"
              type="text"
              name="message"  
            ></textarea>
            <button
              className="contactUs-btn"
              type="submit"
              value="Send" 
            >
              Send Message
            </button>
        
          </form>
          <h3>Follow or connect with us</h3>
          <div className="media-icons">
            <img src={website} alt="Website" />

            <img src={linkedln} alt="linkedln" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ContactUs;