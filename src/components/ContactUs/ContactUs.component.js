import React from "react";
import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";
import './ContactUs.styles.css';
import emailIcon from '../../assets/icons/email.png';
import contactImage from '../../assets/contactUs.jpg';
import Instagram from '../../assets/icons/Instagram.png';
import facebook from '../../assets/icons/facebook.png';
import website from '../../assets/icons/website.png';
import twitter from '../../assets/icons/Twitter.png';


const ContactUs = () => {
  return (
    <div className="contact-container">
      <Header />
        <main className="contact-us-wrapper">
          <div className="contact-us-image-container">
            <img src={contactImage} className="contact-us-image" alt="contact"/>
          </div>
          <div className="contact-us-container">
            <h1 className="contact-us-heading">Get In Touch</h1>
            <div className="konsultx-email">
              <img src={emailIcon} alt="email" className="konsultx-email-icon" />
              <span className="konsultx-span">konsultx@gmail.com</span>
            </div>
            <p className="contact-us-para">-OR-</p>
            <form>
              <input
                className="form-input"
                placeholder="Full Name"
                type="text"
              />
              <input
                className="form-input"
                placeholder="Email"
                type="email"
              />
              <input
                className="form-input"
                placeholder="Message"
                type="text"
              />
              <button
                className="contactUs-btn"
                type="submit"
              >
                Send Message
              </button>
            </form>
            <h3>Follow or connect with us</h3>
          <div className="media-icons">
            <img src={Instagram} alt="Instagram" />

            <img src={facebook} alt="Facebook" />

            <img src={website} alt="Website" />

            <img src={twitter} alt="Twitter" />
          </div>
          </div>
        </main>
      <Footer />
    </div>
  )
}

export default ContactUs;