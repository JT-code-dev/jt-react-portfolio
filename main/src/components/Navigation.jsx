import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Header.css";

const Navigation = () => {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/" className={getNavLinkClass}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={getNavLinkClass}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={getNavLinkClass}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className={getNavLinkClass}>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
