import React, { useEffect, useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import {
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Colors } from "../Common/Color.jsx";
import { AuthContext } from '../../AuthContext';

const navTextStyle = {
  fontFamily: "Lobster, cursive",
  fontWeight: "bold",
};

export default function Navbar() {
  const { token } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState(0); 

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`https://ecommerce-node4-five.vercel.app/cart`, {
        headers: {
          'Authorization': `Tariq__${token}`,
        },
      });
      const data = response.data;
      if (data.products) {
        setCartItems(data.count);
        fetchCartItems();
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchCartItems();
    }
  }, [token]);

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
              Easy Returns | Free Shipping Over $199
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
            <Link to="Profile">
              <FontAwesomeIcon icon={faUser} color={Colors.secondary} />
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
                {cartItems}
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
                  to="/Order"
                  style={{ color: Colors.subsecondary, ...navTextStyle }}
                >
                  Order
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
