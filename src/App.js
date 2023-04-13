import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home.component';
 import About from './components/About/About.component';
 import ContactUs from './components/ContactUs/ContactUs.component';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact-Us" element={<ContactUs/>}></Route>
        </Routes>
      </Router>
    </div >
  )
}

export default App;