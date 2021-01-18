import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
              VME
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-link active" to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
                <NavLink className="nav-link" to="/user">
                  Evaluate Car
                </NavLink>
                <NavLink className="nav-link" to="/ads">
                  Cars
                </NavLink>
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
                <Link
                  className="btn btn-outline-success"
                  to="/login"
                  style={{
                    marginLeft: "700px",
                  }}
                >
                  Login
                </Link>
                <Link
                  className="btn btn-outline-primary"
                  to="/signup"
                  style={{ marginLeft: "10px" }}
                >
                  Register
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
