import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './navbarStyles.css';
import CustomLink from './CustomLink';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
  
    useEffect(() => {
      const storedUsername = localStorage.getItem('username');
      setUsername(storedUsername);
    }, [location]); 
  
    const handleLogout = () => {
      localStorage.removeItem('username');
      setUsername('');
      navigate('/login'); 
    };

    return (
      <nav className="navbar">
          <Link to="/">
            <img src="/images/ClearKarbon.PNG" alt="Clear Karbon Exchange Logo" className="navbar-logo" />
          </Link>
          <div className="navbar-links">
            <CustomLink to="/about">About Us</CustomLink>
            <CustomLink to="/portfolio">Portfolio</CustomLink>
            <CustomLink to="/invest">Invest</CustomLink>
            {/* <CustomLink to="/team">The Team</CustomLink> */}
            <div className="navbar-login">
            {username ? (
              <div className="navbar-username" onClick={handleLogout}>{username}</div>
            ) : (
              <CustomLink to="/login" className="navbar-btn">Login</CustomLink>
            )}
          </div>
          </div>

      </nav>
    );
};

export default Navbar;
