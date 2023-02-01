import React from 'react';
import logo from '../../assets/logo6.png';
import linkedln from '../../assets/icons/linkedln.png';
import location from '../../assets/icons/location.png';
import phone from '../../assets/icons/phone.png';
import email from '../../assets/icons/email.png';


import './Footer.styles.css'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-logo-container'>
        <img src={logo} alt='logo' className='footer-logo' />
      </div>
      <div className='footer-info'>
        <ul>
          <li className='list-item'><img
            className="icon"
            src={phone}
            alt="Facebook"
          />21728053
          </li>
          <li className='list-item'><img
            className="icon"
            src={email}
            alt="Facebook"
          />info@konsultx.dk
          </li>
          <li className='list-item'>
            <img
              className="icon"
              src={location}
              alt="Facebook"
            />Snogegårdsvej 86, Søborg, Denmark
          </li>
          <li className='list-item'>
            <img
              className="icon"
              src={linkedln}
              alt="Facebook"
            />Follow Us
          </li>
        </ul>
      </div>
      <p className='copyright-para'>Copyright © All Rights Reserved</p>
    </footer>
  )
}
export default Footer;