import React from 'react'
import "../pages/styles/Collection.css";
import collection1 from "../assets/collection1.png";
import collection2 from "../assets/collection2.png";
import collection3 from "../assets/collection3.png";    

const Collection = () => {
  return (
    <div class="collection">
        <div class="div6">
            <h2>Collections</h2>
            <p>Discover our hand-picked selection of the season's must-have pieces</p>
        </div>

        <div className="collection-cards">
                  <div className="div4">
                     <img src={collection2} alt="" />
                    <h2>Women's Wear</h2>
                    <p>Elegant and sophisticated pieces designed for the modern woman.</p>
                  </div>
        
                  <div className="div5">
                     <img src={collection3} alt="" />
                    <h2>Men's Wear</h2>
                    <p>Stay ahead with our curated collection of contemporary fashion</p>
                  </div>
        
                  <div className="div3">
                     <img src={collection1} alt="" />
                    <h2>New Arrivals</h2>
                    <p>Fresh styles just in. Be the first to rock this season's hottest looks.</p>
                  </div>
        
                </div>
    </div>
    
  )
}

export default Collection
