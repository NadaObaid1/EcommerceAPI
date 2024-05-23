import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const images = [
  require('../assets/1.jpg'),
  require('../assets/2.jpg'),
  require('../assets/3.jpg'),
  require('../assets/4.jpg')
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are a modern furniture store providing quality products to make your home beautiful and comfortable.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FontAwesomeIcon icon={faEnvelope} /> info@furniturestore.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h4>Gallery</h4>
          <div className="image-grid">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Gallery image ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Furniture Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
