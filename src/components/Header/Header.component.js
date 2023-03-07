import React from 'react';
import { Link, Outlet } from "react-router-dom";
import imageHeader from '../../assets/logo6.png';
import './Header.styles.css';

const Header = () => {
  return (
    <header className="header-component">
      <div className='header-content'>
      <div className="header-image">
        <img src={imageHeader} className="headerLogo" alt="Header" />
      </div>
      <div className='nav-container'>
        <ul>
          <li><Link className="nav-list" to="/">Home</Link></li>
          <li><Link className="nav-list" to="/About">About</Link></li>
          <li><Link className="nav-list" to="/Contact-Us">Contact Us</Link></li>
        </ul>
        <Outlet />
      </div>
      </div>
      
    </header>
  );
};
export default Header;