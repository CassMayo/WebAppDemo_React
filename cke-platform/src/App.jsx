import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBar from './components/Navbar/navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Login from './pages/Login.jsx';
import CompanyPage from './pages/CompanyPage.jsx';
import Register from './pages/Register.jsx';
import User from './pages/User.jsx';
import Listing from './components/Portfolio/Listing/Listing.jsx'
import Certificate from './components/Portfolio/Certificate/Certificate.jsx';

import { PurchaseProvider } from './components/logic/PurchaseContext.jsx';


function App() {
  return (
    <>
      <div className="App">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap" rel="stylesheet" />
        </Helmet>
        <NavBar />
        <div className="content">
          <PurchaseProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/login" element={<Login />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/user" element={<User />} />
              <Route path="/portfolio/:id" element={<Listing />} />
              <Route path="/certificate" element={<Certificate />} />
            </Routes>
          </PurchaseProvider>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
