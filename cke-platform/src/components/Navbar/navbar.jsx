import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import UserDropdown from './UserDropdown/UserDropdown';
import CustomLink from './CustomLink';
import './navbarStyles.css';

const Navbar = () => {
    const [username, setUsername] = useState('');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      const storedUsername = localStorage.getItem('username');
      setUsername(storedUsername || ''); 
    }, [location]);
  

    const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

    return (
      <nav className="navbar">
        <Link to="/">
          <img src="/images/ClearKarbon.PNG" alt="Clear Karbon Exchange Logo" className="navbar-logo" />
        </Link>
        <div className="navbar-links">
          <CustomLink to="/about">About Us</CustomLink>
          <CustomLink to="/portfolio">Portfolio</CustomLink>
          <CustomLink to="/invest">Invest</CustomLink>
          {username ? (
         <div className="navbar-user-section" onClick={toggleDropdown}>
         <FontAwesomeIcon className='user-icon' icon={faUserCircle} />
         <span className="navbar-username-text">{username}</span> 
         {isDropdownVisible && <UserDropdown />}
       </div>
          ) : (
            <CustomLink to="/login" className="navbar-btn">Login</CustomLink>
          )}
        </div>
      </nav>
    );
};

export default Navbar;
