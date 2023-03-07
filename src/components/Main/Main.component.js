import React, {useEffect} from "react";
import './Main.styles.css';
import Vivus from 'vivus';

const Main =()=>{
  useEffect(() => {
    new Vivus('main-title', {duration:200, file:'svg/main-title_animated.svg'})
  }, [])
  return (
    <div className="main-div">
      <div className="main--content-container">
      <div id='main-title' className="main-heading"></div>
    <p className="main-content">We specialize in SAP Consulting with special focus on Accounts Payable process optimization and reducing 
    the cost per transaction for the AP Process.</p>
      </div>
    </div>
  )
}

export default Main;