import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";
import './ContactUs.styles.css';
import emailIcon from '../../assets/icons/email.png';
import contactImage from '../../assets/contactUs.jpg';
import website from '../../assets/icons/website.png';
import linkedln from '../../assets/icons/linkedln2.png';
import Modal from "../Modal/Modal.component";


const ContactUs = () => {
  const [formValue, setFormValue] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const [openModal, setOpenModal] = useState(true);

  const form = useRef();

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validationForm(formValue));
    setSubmit(true);
    setOpenModal(true);
  }

  const validationForm = (value) => {
    const errors = {};
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!value.name) {
      errors.name = "* Please Enter Name";
    }

    if (!value.email) {
      errors.email = "* Please Enter Email";
    } else if (!emailPattern.test(value.email)) {
      errors.email = "* Enter Valid Email";
    }
    return errors;
  }
  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formError, formValue, isSubmit]);

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
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="form-input"
                placeholder="Full Name"
                type="text"
                name="name"
                value={formValue.name}
                onChange={handleValidation}
              />
              <span className="text-danger">{formError.name}  </span>
            </div>
            <div>
              <input
                className="form-input"
                placeholder="Email"
                type="email"
                name="email"
                value={formValue.email}
                onChange={handleValidation}
              />
              <span className="text-danger">{formError.email}  </span>
            </div>

            <textarea
              rows="4"
              className="form-input form-textarea"
              placeholder="Message"
              type="text"
              name="message"
              value={formValue.message}
              onChange={handleValidation}
            ></textarea>
            <button
              className="contactUs-btn"
              type="submit"
              onClick={handleSubmit}
            >
              Send Message
            </button>
          
                <Modal
                  title="Your message has been sent!"
                  open={openModal}
                  toggle={() => setOpenModal(false)}
                />
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