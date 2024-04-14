import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink';
import './UserDropdown.css';
import { LoginContext } from '../../logic/LoginContext';


const UserDropdown = (props) => {
  const navigate = useNavigate();
  const { logOut } = useContext(LoginContext)


  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out? We will miss you!')) {
      logOut()
      navigate("/")
    }
  };

  return (
    <div className="dropdown-menu">
      <ul>
        {/* bruk av isSeller syntaks funker slik "if isSeller is provider, show Company Page, else show Your Page */}
        <CustomLink to={props.isSeller ? "/company" : "/user"}>{props.isSeller ? "Dashboard" : "Your Orders"}</CustomLink>
        <li onClick={handleLogout} className='logout'>Logout</li>
      </ul>
    </div>
  );
};

export default UserDropdown;
