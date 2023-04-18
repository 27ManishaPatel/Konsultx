import React, { useState , useRef} from "react";
import './ContactUs.styles.css';
import Modal from "../Modal/Modal.component";
import emailjs from '@emailjs/browser';


const ContactFormJs = () => {
  const [status, setStatus] = useState("Submit");
  const [openModal, setOpenModal] = useState(false);
  const form = useRef();
 
const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm(
    process.env.REACT_APP_SERVICE_ID, //service_id click on the Email Services link
    process.env.REACT_APP_TEMPLATE_ID, //YOUR_TEMPLATE_ID Email Templates link in your dashboard's side menu and go to the settings tab like so:
    form.current,
    process.env.REACT_APP_USER_ID //YOUR_PUBLIC_KEY in account general
  ).then((result) => {
    console.log(result.text);
  }, (error) =>{
    console.log(error.text);
    alert("FAILED...", error);
  });
  setStatus("Submit");
  setOpenModal(true);
  e.target.reset();
}

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <input className="form-input" type="text" id="name" name="from_name" placeholder="Full Name" required />
        
      </div>
      <div>
        <input className="form-input" type="email" id="email" name="from_email" placeholder="Email" required />
      </div>
      <div>
        <textarea rows="4" className="form-input form-textarea" id="message" name="from_message" placeholder="Message" required />
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

export default ContactFormJs;