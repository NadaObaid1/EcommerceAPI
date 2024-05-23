import React from 'react';
import './Background.css'
import image from '../assets/lllm.jpg' 

function Background() {
  return (
    <div>
    <div className="background-container">
      <div className="image-container">
        <img src={image} alt="Fashion Collection" className="background-image" />
      </div>
      <div className="text-container">
        <div className="text-content">
          <p id="pargraph">|</p>
          <h4>GORGEOUS FURNITURE COLLECTION FOR THE <br /> AWESOME 2024 SUMMER SEASON OF THE <br /> CANNES FESTIVAL</h4>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <p id="pargraph">|</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Background;





/*import React from 'react';
import './Background.css'
import image from '../assets/lm.jpg' 
import Card from '../Card/Card.jsx';

function Background() {
  return (
    <div style={{marginBottom: '100px'}}>
    <div className="image" style={{backgroundImage: `url(${image})`, padding: "80px", marginTop: 50, backgroundSize: "cover", backgroundAttachment: "fixed"}}>
      <p id="pargraph">|</p>
      <h2>GORGEOUS FASHION COLLECTION FOR THE <br /> AWESOME 2017 SUMMER SEASON OF THE <br /> CANNES FESTIVAL</h2>
      <p>Lorem ipsum dolor sit amet, consectetur.</p>
      <p id="pargraph">|</p>
    </div>
    <div>
      <Card/>
    </div></div>
  );
}

export default Background;
*/