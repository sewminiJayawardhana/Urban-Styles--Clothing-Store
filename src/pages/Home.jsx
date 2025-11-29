import React from "react";
import hero from "../assets/hero.png";
import "../pages/styles/Home.css";

const Home = () => {

  return (
    <section>
      <div class="parent">
        <div class="left-side">
            <h1>Urban Elegance <br />Clothing</h1>
            <p>Discover trendy, premium-quality outfits for every occasion.</p>

            <button>Shop Now</button>


        </div>

        <div class="right-side">
            <img src={hero} alt="clothing-hero" />
        </div>
      </div>
    </section>
  );
};


export default Home;
