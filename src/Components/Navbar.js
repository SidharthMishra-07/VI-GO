import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <>
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/home" className="nav-logo">
          VI-GO
          <i className="fas fa-bicycle"></i>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/home"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Logout
            </NavLink>
          </li>
        </ul>

        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Navbar