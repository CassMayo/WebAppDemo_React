

import CustomLink from './CustomLink';
import './navbarStyles.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
      <nav className="navbar">
          <Link to="/">
            <img src="/images/ClearKarbon.PNG" alt="Clear Karbon Exchange Logo" className="navbar-logo" />
          </Link>
        <div className="navbar-links">

          <CustomLink to="/about">About Us</CustomLink>
          <CustomLink to="/portfolio">Portfolio</CustomLink>
          <CustomLink to="/invest">Invest</CustomLink>
          <CustomLink to="/team">The Team</CustomLink>
          
          <button className="navbar-login">Login</button>
        
        </div>
      </nav>
    );
};

export default Navbar;
