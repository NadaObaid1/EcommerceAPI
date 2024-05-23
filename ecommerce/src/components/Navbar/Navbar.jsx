import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Colors } from "../Common/Color.jsx";

const navTextStyle = {
  fontFamily: "Lobster, cursive",
  fontWeight: "bold",
};

export default function Navbar() {
  return (
      <nav>
        <div
          className="fixed-top nav-top text-white"
          style={{ backgroundColor: Colors.primary }}
        >
          <div className="container d-flex justify-content-between">
            <div className="left-content d-flex">
              <span
                style={{
                  color: Colors.background,
                  fontSize: 14,
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                Easy Returns | Free Shoping Over $199
              </span>
            </div>
            <div className="right-content d-flex" style={{ gap: "10px" }}>
              <Link
                to="/login"
                style={{ color: Colors.background, textDecoration: "none" }}
              >
                Login
              </Link>
              <span>|</span>
              <Link
                to="/register"
                style={{ color: Colors.background, textDecoration: "none" }}
              >
                Register
              </Link>
            </div>
          </div>
        </div>

        <header>
          <div className="container d-flex justify-content-between align-items-center pt-5">
            <div className="search-icon">
              <Link to="#">
                <FontAwesomeIcon icon={faSearch} color={Colors.secondary} />
              </Link>
            </div>
            <div
              className="social-icons"
              style={{ display: "flex", gap: "10px" }}
            >
              <Link to="#">
                <FontAwesomeIcon icon={faFacebook} color={Colors.secondary} />
              </Link>
              <Link to="#">
                <FontAwesomeIcon icon={faInstagram} color={Colors.secondary} />
              </Link>
              <Link to="#">
                <FontAwesomeIcon icon={faTwitter} color={Colors.secondary} />
              </Link>
              <Link to="/Shop" className="link position-relative">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  style={{ color: Colors.primary }}
                />
                <div
                  className="counter"
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    borderRadius: "50%",
                    width: "15px",
                    height: "15px",
                    textAlign: "center",
                    fontSize: "10px",
                    backgroundColor: "#ed9f66",
                    color: Colors.secondary,
                  }}
                >
                  5
                </div>
              </Link>
            </div>
          </div>
        </header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown"
                    to="/"
                    style={{ color: Colors.secondary, ...navTextStyle }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown"
                    to="/ProductsScreen"
                    style={{ color: Colors.subsecondary, ...navTextStyle }}
                  >
                    Products
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown"
                    to="/shop"
                    style={{ color: Colors.subsecondary, ...navTextStyle }}
                  >
                    Shop
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        style={{ color: Colors.subsecondary, ...navTextStyle }}
                      >
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        style={{ color: Colors.subsecondary, ...navTextStyle }}
                      >
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        style={{ color: Colors.subsecondary, ...navTextStyle }}
                      >
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown"
                    to="/about"
                    style={{ color: Colors.subsecondary, ...navTextStyle }}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown"
                    to="/contact"
                    style={{ color: Colors.subsecondary, ...navTextStyle }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
  );
}


/*  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">N-Shop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
       
      </div>
    </nav>



<div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to=''><FontAwesomeIcon icon={faHome} color='#8a0f0f'/> Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Products"><FontAwesomeIcon icon={faShoppingCart} color='#8a0f0f'/> Products</Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to='Register'><FontAwesomeIcon icon={faUserPlus} color='#8a0f0f'/> Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="LogIn"><FontAwesomeIcon icon={faSignInAlt} color='#8a0f0f'/> LogIn</Link>
            </li>
          </ul>
        </div> */
