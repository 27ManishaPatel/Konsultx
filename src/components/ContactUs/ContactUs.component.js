import React from "react";
import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";
import './ContactUs.styles.css';
import emailIcon from '../../assets/icons/email.png';
import contactImage from '../../assets/contactUs.jpg';
import website from '../../assets/icons/website.png';
import linkedln from '../../assets/icons/linkedln2.png';
import Mailto from "../Mailto/Mailto";
import ContactForm from './ContactForm';
// import Modal from "../Modal/Modal.component";


const ContactUs = () => {

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
            <Mailto email="info@konsultx.dk" subject="Hello" body="Hello konsultx!">
            <span className="konsultx-span"> info@konsultx.dk </span>
              </Mailto>
             
          </div>
          <p className="contact-us-para">-OR-</p>

          <ContactForm/>
          <h3>Follow or connect with us</h3>
          <div className="media-icons">
            <img src={website} alt="Website" />
            <a href="https://www.linkedin.com/in/ashish-bansal-a591437/"><img src={linkedln} alt="linkedln" /></a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ContactUs;