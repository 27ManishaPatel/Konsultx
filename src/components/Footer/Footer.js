import React from 'react';
 // import logo from '../../assets/BlackonWhite.png';
import instagram from '../../assets/icons/Instagram.png';
import facebook from '../../assets/icons/facebook.png';
import website from '../../assets/icons/website.png';
import Twitter from '../../assets/icons/Twitter.png';
import location from '../../assets/icons/location.png';
import phone from '../../assets/icons/phone.png';
import email from '../../assets/icons/email.png';


import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-container-col image'>
        {/* <img src={logo} alt='logo' className='footer-logo' /> */}
        <ul>
          <li><img
                className="icon"
                src={phone}
                alt="Facebook"
              />21728053</li>
          <li><img
                className="icon"
                src={email}
                alt="Facebook"
              />info@konsultx.dk</li>
          <li>
          <img
                className="icon"
                src={location}
                alt="Facebook"
              />Snogegårdsvej 86, Søborg, Denmark</li>
        </ul>
      </div>
      <div className='footer-container-col'>
        <h4>About us</h4>
        <p>Company Statistics</p>
        <p>Our Staff</p>
        <p>Our History</p>
      </div>
      <div className='footer-container-col'>
        <h4>Our mission</h4>
        <p>Innovate together</p>
        <p>Relationships</p>
        <p>Grow together</p>
      </div>
      <div className='footer-container-col' >
        <h4>Keep in touch</h4>
          <ul className='icons'>
            <li>
              <img
                className="icon-footer"
                src={instagram}
                alt="Instagram"
              />
            </li>
            <li>
              <img
                className="icon-footer"
                src={facebook}
                alt="Facebook"
              />
            </li>
            <li>
              <img
                className="icon-footer"
                src={website}
                alt="Website"
              />
            </li>
            <li>
              <img
                className="icon-footer"
                src={Twitter}
                alt="Twitter"
              />
            </li>
          </ul>
        </div>
    </footer>
  )
}
export default Footer;