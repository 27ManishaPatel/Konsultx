import React, { useState } from "react";
import './ContactUs.styles.css';
import Modal from "../Modal/Modal.component";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const [openModal, setOpenModal] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    await response.json();
    setOpenModal(true);
    name.value= '';
    email.value = '';
    message.value = '';
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input className="form-input" type="text" id="name" placeholder="Full Name" required />
        
      </div>
      <div>
        <input className="form-input" type="email" id="email" placeholder="Email" required />
      </div>
      <div>
        <textarea rows="4" className="form-input form-textarea" id="message" placeholder="Message" required />
      </div>
      <button className="contactUs-btn" type="submit">{status}</button>
      <Modal
                  title="Your message has been sent!"
                  open={openModal}
                  toggle={() => setOpenModal(false)}
                />
    </form>
    
  );
};

export default ContactForm;