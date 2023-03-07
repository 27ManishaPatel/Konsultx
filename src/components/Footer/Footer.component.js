import React from 'react';
import logo from '../../assets/logo6.png';
import linkedln from '../../assets/icons/linkedln.png';
import location from '../../assets/icons/location.png';
import phone from '../../assets/icons/phone.png';
import email from '../../assets/icons/email.png';
import Mailto from '../Mailto/Mailto';


import './Footer.styles.css'

const Footer = () => {
 
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='footer-logo-container'>
          <img src={logo} alt='logo' className='footer-logo' />
        </div>
        <div className='footer-info'>
          <ul>
            <li className='list-item'>
              <img
                className="icon"
                src={phone}
                alt="phone"
              />
              <a className='link' href="tel:+4521728053">
                +45 21728053
              </a>
            </li>
            <li className='list-item'><img
              className="icon"
              src={email}
              alt="email"
            />
              <Mailto email="info@konsultx.dk" subject="Hello" body="Hello konsultx!">
                info@konsultx.dk
              </Mailto>

            </li>
            <li className='list-item'>
              <img
                className="icon"
                src={location}
                alt="location"
              />Søborg, Denmark
            </li>
            <li className='list-item'>
              <img
                className="icon"
                src={linkedln}
                alt="linkedln"
              />Follow Us
            </li>
          </ul>
        </div>
      </div>
      <p className='copyright-para'>Copyright © All Rights Reserved</p>
    </footer>
  )
}
export default Footer;