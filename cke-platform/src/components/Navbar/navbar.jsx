

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
          {/*<CustomLink to="/team">The Team</CustomLink> */}
        <div className="navbar-login">
          <button className="navbar-btn">Login</button>
          </div>
      
        </div>
      </nav>
    );
};

export default Navbar;
