import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import About from "./About"
import Medicinalplants from "./Medicinalplants";
import Login from "./Login";
import {Routes, Route} from "react-router-dom";

// import Captchagenerate from "./Captchagenerate"
// import Forest1 from './downloads/Forest1.jpg'

function App() {
  return (
    <>
    <Navbar/>
  
    <switch>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/Medicinalplants" element={<Medicinalplants></Medicinalplants>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        {/* <Route path="/Captchagenerate" element={<Captchagenerate></Captchagenerate>}></Route> */}
        </Routes>
        </switch>
        
    </>
  );
}

export default App;
