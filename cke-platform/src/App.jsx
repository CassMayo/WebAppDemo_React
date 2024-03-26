import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import NavBar from './components/navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Pricing from './pages/Pricing.jsx';

function App() {
  return (
    <>
    <div className="App"> 
      <NavBar />
      <div className="content"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
      <Footer /> 
    </div>
    </>
  );
}

export default App;
