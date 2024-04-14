import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink';
import './UserDropdown.css';

const UserDropdown = (props) => {
  const navigate = useNavigate();


  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out? We will miss you!')) {
      localStorage.clear();
      navigate('/login');
    }
  };

  return (
    <div className="dropdown-menu">
      <ul>
        {/* bruk av isSeller syntaks funker slik "if isSeller is provider, show Company Page, else show Your Page */}
        <CustomLink to={props.isSeller ? "/company" : "/User"}>{props.isSeller ? "Company Page" : "Your Page"}</CustomLink>
        <CustomLink to="/settings">Settings</CustomLink>
        <li onClick={handleLogout} className='logout'>Logout</li>
      </ul>
    </div>
  );
};

export default UserDropdown;
