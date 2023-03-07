import React from "react";
import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";
import aboutLogo from '../../assets/mainwrapper.jpg';
import './About.styles.css';
const About = () => {
  return (
    <div>
      <Header />

      <div className="about-container">
        <div className="about-heading-container">
          <div className="about-content">
            <h1 className="about-heading">About Us.</h1>
              <p className="about-para">KonsultX is based in Copenhagen, Denmark and we provide SAP Consulting Services with special focus on quality of deliverables and reducing total cost of ownership.
                {/*There's this notion that to grow a business, 
              you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers.
               We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. 
                That's why we've created an ecosystem uniting software, education, 
              and community to help businesses grow better every day.</p> */}
              </p>
          </div>
          <img src={aboutLogo} alt='girl' className="about-image"></img>
        </div>
      </div>

      <div className="about-partner-container">
        <div className="about-partner-content">
        <h1 className="about-partner-heading">The team</h1>
        <p className="about-partner-para">At KonsultX, we are a team of 3 very experienced VIM / SAP Consultants with approx. 
          50 years of combined SAP experience and more than 20 years of combined VIM experience. 
          We have worked for more than 30 different clients for VIM projects ranging from VIM implementations, rollouts, enhancements and production support etc. 
          We have experience in VIM from VIM 7.0 to the latest VIM 20.4 SP4. Apart from this, we have also a rich experience in other related OpenText products like ICC (Invoice Capture Center), 
          Business Center, Intelligent Capture for SAP and OpenText Archive Center.
          </p>
        </div>
        {/* <div className="partners-info">
          <div className="partner-profile">Partner 1</div>
          <div className="partner-profile">Partner 2</div>
          <div className="partner-profile">Partner 3</div>
        </div>
        */}
      </div>


      <Footer />
    </div>
  )
}

export default About;