//import logo from './logo.svg';
import './App.css';
import React from 'react'
import Home from './Page/Home'
import Service from './Page/Service'
import Contact from './Page/Contact'
import About from './Page/About'
import { Route, Redirect } from 'react-router-dom';
import { MemoryRouter as Router } from 'react-router-dom';
//import React, { Component } from 'react';


function App() {
  return (
    <>
      <Router>
        
        <Route path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Service" component={Service} />
        <Route path="/Contact" element={<Contact/>} />
        {/* <Redirect to="/" /> */}

      </Router>
    </>
  
  );
}

export default App;
