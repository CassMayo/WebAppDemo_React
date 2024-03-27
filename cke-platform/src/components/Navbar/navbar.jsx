

import './navbarStyles.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"


const Navbar = () => {
    return (
      <nav className="navbar">
          <Link to="/">
        <img src="/images/ClearKarbon.PNG" alt="Clear Karbon Exchange Logo" className="navbar-logo" />
        </Link>
        <div className="navbar-links">
          <a href="/about">About Us</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/invest">Invest</a>
          <a href="/team">The Team</a>
          <button className="navbar-login">Login</button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
