
import React, { useState, useEffect } from 'react';
import { Colors } from '../Common/Color.jsx';
import Products from '../Products/Products.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import Card from '../Card/Card.jsx';
import Background from '../Background/Background.jsx';
import About from '../About/About.jsx';

const images = [
  require('../assets/h5.jpg'),
  require('../assets/h2.jpg'),
  require('../assets/llll.jpg')
];

const peopleImages = [
  require('../assets/1.jpg'),
  require('../assets/2.jpg'),
  require('../assets/3.jpg'),
  require('../assets/444.jpg'),
  require('../assets/d.png')
];

const buttonStyle = {
  position: 'absolute', 
  fontFamily: 'Lobster, cursive',
  top: '60%', 
  left: '73%', 
  transform: 'translate(-50%, -50%)',
  padding: '10px 40px', 
  backgroundColor: Colors.primary,
  color: Colors.background,
  border: 'none',
  borderRadius: '5px', 
  cursor: 'pointer', 
};

const textStyle = {
  position: 'absolute',
  top: '15%',
  left: '73%', 
  transform: 'translate(-50%, -50%)', 
  fontSize: '25px',
  color: 'green',
  textAlign: 'center',
  lineHeight: '1.5',
  fontWeight: '700', 
  fontFamily: 'Poetsen One' ,
  letterSpacing: '3px', 
};

const loremStyle = {
  position: 'absolute',
  top: '40%',
  left: '73%', 
  transform: 'translate(-50%, -50%)',
  fontSize: '12px',
  color: '#b7b7b7',
  textAlign: 'center', 
};

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const divStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: 'contain', 
    backgroundPosition: 'center left 200px', 
    backgroundRepeat: 'no-repeat',
    height: '60vh',
    position: 'relative',
    transition: 'background-image 0.5s ease-in-out' 
  };

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  const renderDots = () => {
    return images.map((_, index) => (
      <div
        key={index}
        className={`dot ${currentImageIndex === index ? 'active' : ''}`}
        onClick={() => handleImageChange(index)}
      />
    ));
  };

  return (
    <div>
      <p className='header'>karisma</p>
      <div>
        <div style={divStyle}>
          <div style={textStyle}>Explore Our Modern Furniture Collection</div>
          <p style={{ ...loremStyle, zIndex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac massa nec justo condimentum maximus ac ut tellus.
          </p>
          <button style={{ ...buttonStyle, display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '5px' }}>Shop Now</span>
            <FontAwesomeIcon icon={faArrowRight} style={{ backgroundColor: '#ed9f66', color:'#fff', borderRadius: '50%', padding: 7 }} />
          </button>
          <div className="home-container">
            <div className="circle-container">
              {peopleImages.map((image, index) => (
                <div className="circle" key={index}>
                  <img src={image} alt={`Person ${index + 1}`} />
                </div>
              ))}
              <p style={{ fontFamily: 'serif', fontWeight: 'bold', marginLeft: '10px', color: '#5c636e', fontSize: 14 }}>
                4.9 Ratings <br/>
                <p style={{ fontSize: 10, color: '#b7b7b7' }}>Trusted by 50k+ Customers</p>
              </p>
            </div>
          </div>
        </div>
        <div className="dots-container">
          {renderDots()}
        </div>
      </div>
    <Products/>
    <Background/>
    <Card/>
    <About/>
    </div>
  );
}
