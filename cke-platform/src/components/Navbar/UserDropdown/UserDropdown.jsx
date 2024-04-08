import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink';
import './UserDropdown.css';

const UserDropdown = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole');

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out? We will miss you!')) {
      localStorage.clear();  
      navigate('/login');
    }
  };

  return (
    <div className="dropdown-menu">
      <ul>
        {/* bruk av userRole syntaks funker slik "if userRole is provider, show Company Page, else show Your Page */}
        <CustomLink to={userRole === 'provider' ? "/company" : "/User"}>{userRole === 'provider' ? "Company Page" : "Your Page"}</CustomLink>
        <CustomLink to="/settings">Settings</CustomLink>
        <li onClick={handleLogout} className='logout'>Logout</li>
      </ul>
    </div>
  );
};

export default UserDropdown;
