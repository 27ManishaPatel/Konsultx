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
        <div className='testimonial'>
          <h3>Testimonials</h3>
          <p>Itaque primos congressus copulationesque et 
            consuetudinum instituendarum voluntates fieri propter voluptatem;
             Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. 
            Quare obscurentur etiam haec, quae secundum naturam ess.</p>
        
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;