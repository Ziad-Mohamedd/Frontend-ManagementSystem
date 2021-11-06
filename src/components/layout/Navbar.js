import React, { useEffect } from "react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    console.log("Is User Login", localStorage.getItem("isUser"));
  }, []);

  function logout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Management System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Dashboard
              </NavLink>
            </li>
            {localStorage.getItem("isUser") === "true" ? (
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/RegisterUser">
                  Register User
                </NavLink>
              </li>
            ) : (
              <li className="nav-item"></li>
            )}
            {localStorage.getItem("isUser") === "true" ? (
              <li className="nav-item">
                <div className="nav-link" onClick={logout}>
                  Logout
                </div>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/Login">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
