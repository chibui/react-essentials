import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {  Home,  About,  Events,  Contact, Whoops404, Services, CompanyHistory, Location } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/history" element={<CompanyHistory />}></Route>
        <Route path="/location" element={<Location />}></Route>
      </Route>
      <Route path="/events" element={<Events />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="*" element={<Whoops404 />}/>
    </Routes>
  )
}

export default App;
