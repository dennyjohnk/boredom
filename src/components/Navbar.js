import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper red darken-3 navbar-fixed">
        <div className="container">
          <a href="/" className="brand-logo">
            Boredom
          </a>
          <ul className="right">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
