import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light dash-navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} className="d-inline-block align-top" alt="logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/employees" className="nav-link brand-title">
              Employee Tracker
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
