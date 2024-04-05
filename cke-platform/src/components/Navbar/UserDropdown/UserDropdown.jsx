import React from 'react';
import { useNavigate } from "react-router-dom";
import CustomLink from '../CustomLink'; 
import './UserDropdown.css';

const UserDropdown = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const isConfirmed = window.confirm('Are you sure you want to log out? We will miss you!');
    if (isConfirmed) {
      localStorage.removeItem('username');
      navigate('/login');
    }
  };

  return (
    <div className="dropdown-menu">
      <ul>
        <CustomLink to="/user">Your Page</CustomLink>
        <CustomLink to="/settings">Settings</CustomLink>
        <li onClick={handleLogout} className='logout'>Logout</li>
      </ul>
    </div>
  );
};

export default UserDropdown;
