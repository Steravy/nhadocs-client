import { AppBar, Container } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBarComponent.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";

export default function NavBarComponent() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <AppBar>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Container maxWidth="xl">
          <nav className="navbar">
            <div className="navbar-container container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <GiRocketThruster className="navbar-icon" />
                nhaDocs
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </Container>
      </IconContext.Provider>
    </AppBar>
  );
}
