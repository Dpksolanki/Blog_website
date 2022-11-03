import './App.css';
import React from 'react'
import Navbar from './Page/Navbar'
import Home from './Page/Home'
import Service from './Page/Service'
import Contact from './Page/Contact'
import About from './Page/About'
import { BrowserRouter , Redirect, Route , Routes, Switch } from 'react-router-dom';
// import { MemoryRouter as Router } from 'react-router-dom';
//import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <>

      <Navbar title={"title"}/>
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