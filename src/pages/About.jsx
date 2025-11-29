import React from 'react'
import "../pages/styles/About.css";
import medal from "../assets/medal.png";
import star from "../assets/star.png";
import tag from "../assets/Tag.png";
import scissors from "../assets/Scissors.png";

const About = () => {
  return (
    <div className="about">
        <div className="div1">
          <h2>Why Choose Us.</h2>
          <p>Experience the perfect blend of quality, style, and affordability at Urban Style Boutique.</p>


        </div>

        <div className="about-cards">
          <div className="div2">
            <img src={medal} alt="medal" />
            <h5>High-Quality Fabrics</h5>
            <p>Premium materials sourced from the finest suppliers worldwide</p>
          </div>

          <div className="div4">
            <img src={star} alt="star" />
            <h5>Latest Trends</h5>
            <p>Stay ahead with our curated collection of contemporary fashion</p>
          </div>

          <div className="div5">
            <img src={tag} alt="tag" />
            <h5>Affordable Pricing</h5>
            <p>Luxury fashion at prices that won't break the bank</p>
          </div>

          <div className="div6">
            <img src={scissors} alt="scissors" />
            <h5>Custom Tailoring</h5>
            <p>Personalized alterations for the perfect fit every time</p>
          </div>
        </div>
    </div>

  )
}

export default About
