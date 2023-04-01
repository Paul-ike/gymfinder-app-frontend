import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBarLogOut() {
  return (
    <nav id="nav" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img
          id="icon"
          src="https://cdn-icons-png.flaticon.com/512/69/69840.png"
          alt="gym icon"
        />
        <a id="brandName" className="navbar-brand" href="/homeout">
          GYMFINDER
        </a>
        <Link to="/homeout" className="btn btn-light btn-sm m-2">
          Home
        </Link>
        <Link to="/creategym" className="btn btn-light btn-sm m-2">
          Create Gym
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="navbar-nav me-auto mb-2 mb-lg-0"></div>
          <div className="d-flex" role="search">
            <Link to="/admin" className="btn btn-light btn-sm m-2">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarLogOut;