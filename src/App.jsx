import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Services from './pages/Services';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {
  return (

    <Router>
      {/* <Navbar /> */}
      <Routes>

        <Route path="/" element={ <Home /> } />

        <Route path="/services" element={<Services />} />

        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
        
      </Routes>



    </Router>

  );
}
