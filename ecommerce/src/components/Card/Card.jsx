import React from "react";
import "./Card.css";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/444.jpg";

function Card() {
  return (
    <div style={{ marginTop: 10, backgroundColor: '#f0f2eb' }}>
     <h2 style={{marginLeft: 170, fontFamily: 'cursive', fontSize: 23, paddingTop: '30px'}}>Customer Reviews</h2>
      <hr style={{ width: "10%",marginBottom: 60, marginLeft: 180 }} />
      <div className="cards">
        <div className="card">
          <div className="person">
            <img src={image1} alt="Person" />
          </div>
          <h4>Jaime R. </h4>
          <p>Therno where else i thoo lar affordable onine bonte decor !</p>
          <div className="rating">
            <span class="filled-star">&#9733;</span>
            <span class="filled-star">&#9733;</span>
            <span class="filled-star">&#9733;</span>
            <span class="filled-star">&#9733;</span>
            <span class="empty-star">&#9733;</span>
          </div>
        </div>
        <div className="card">
          <div className="person">
            <img src={image2} alt="Person" />
          </div>
          <h4>Kara S.</h4>
          <p>
            Amaring store I ton to shop at the very lant aulmita when shopping
            for a special occasion Novalie never fails. Docor items.
          </p>
          <div className="rating">
            <span class="filled-star">&#9733;</span>
            <span class="filled-star">&#9733;</span>
            <span class="empty-star">&#9733;</span>
            <span class="empty-star">&#9733;</span>
            <span class="empty-star">&#9733;</span>
          </div>
        </div>
        <div className="card">
          <div className="person">
            <img src={image3} alt="Person" />
          </div>
          <h4>Maeve K.</h4>
          <p>
            This troutique is ceriously oue of a kind and hands down.rny
            favotite.
          </p>
          <div className="rating">
            <span class="filled-star">&#9733;</span>
            <span class="empty-star">&#9733;</span>
            <span class="empty-star">&#9733;</span>
            <span class="empty-star">&#9733;</span>
            <span class="empty-star">&#9733;</span>
          </div>
        </div>

        <div className="card">
          <div className="person">
            <img src={image4} alt="Person" />
          </div>
          <h4>Jess1.</h4>
          <p>
            Geeatott customer serviee! The Stytist communicated witti me to pick
            the cutess pieces.
          </p>
          <div className="rating">
            <span class="filled-star">&#9733;</span>
            <span class="filled-star">&#9733;</span>
            <span class="filled-star">&#9733;</span>
            <span class="empty-star">&#9733;</span>
            <span class="empty-star">&#9733;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
