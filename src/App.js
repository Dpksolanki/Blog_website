import './App.css';
import React from 'react'
import Navbar from './page/Navbar.js'
import Home from './Page/Home'
import Service from './Page/Service'
import Contact from './Page/Contact'
import About from './Page/About'
import { BrowserRouter , Redirect, Route , Routes, Switch } from 'react-router-dom';
// import { MemoryRouter as Router } from 'react-router-dom';
//import React, { Component } from 'react';
//import '../node_modules/bootstrap/dist/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar title='Texttile'/>
      <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Service" element={<Service/>} />
        </Routes>
        
      </BrowserRouter>


    </>

  );
}

export default App;