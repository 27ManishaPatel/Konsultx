import React from 'react';

import './Home.styles.css';
import Header  from '../Header/Header.component';
import Footer from '../Footer/Footer.component';
import Main from '../Main/Main.component';


const Home = () => {
  return (
    <div className="homepage-container">
      <div className="header-container">
        <div className="navigation">
         <Header/>
          <Main />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;