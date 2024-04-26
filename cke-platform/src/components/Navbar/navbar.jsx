import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import UserDropdown from './UserDropdown/UserDropdown';
import CustomLink from './CustomLink';
import './navbarStyles.css';
import { LoginContext } from '../logic/LoginContext';
import { BASE_API_URL } from '../../config';

const Navbar = () => {
  const [username, setUsername] = useState('');
  const [isSeller, setIsSeller] = useState(false)
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = useContext(LoginContext)

  // get user data based on id stored in local storage
  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch(`${BASE_API_URL}/users/${localStorage.getItem("userId")}`)

      if (!response.ok) {
        const msg = `An error has occured: ${response.statusText}`
        console.error(msg)
        return
      }
      const userInfo = await response.json()
      if (!userInfo) {
        console.warn(`User with id: ${userId} not found`)
        navigate("/")
        return
      }
      setUsername(userInfo.userName)
      setIsSeller(userInfo.isSeller)
    }

    if (userId) {
      fetchData()
    } else {
      setUsername('')
    }
  }, [userId]);


  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  return (
    <nav className="navbar">


      <Link to="/">
        <img src="/images/ClearKarbon.PNG" alt="Clear Karbon Exchange Logo" className="navbar-logo" />
      </Link>
      <div className="navbar-links">

        <div className={`${location.pathname === "/about" ? "active" : "inactive"} link-btn`}>
          <CustomLink to="/about">About Us</CustomLink>
        </div>


        <div className={`${location.pathname === "/portfolio" ? "active" : "inactive"} link-btn`}>
          <CustomLink to="/portfolio">Portfolio</CustomLink>
        </div>

        {/*<CustomLink to="/invest">Invest</CustomLink>*/}
        {username ? (
          <div className="navbar-user-section" onClick={toggleDropdown}>
            <div className='navbar-user-button'>
              <FontAwesomeIcon className='user-icon' icon={faUser} />
              <span className="navbar-username-text">{username}</span>
            </div>

            {isDropdownVisible && <UserDropdown isSeller={isSeller} />}
          </div>
        ) : (
          <CustomLink to="/login" className="navbar-user-button">Login</CustomLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
