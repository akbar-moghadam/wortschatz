import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Svg1 } from "../assets/imgs/card1.svg";
import { ReactComponent as Svg2 } from "../assets/imgs/card2.svg";
import { ReactComponent as Svg3 } from "../assets/imgs/card3.svg";
const Cards = () => {
  return (
    <div className="cards-container">

      <div className="card1">
        <Link to="/a1/" className="link">
          <Svg1 className="svg1">

          
          </Svg1>
        </Link>
      </div>

      <div className="card2">
      <Link to="/a2/" className="link">
        <Svg2 className="svg2" />
        
          
        </Link>
      </div>

      <div className="card3">
      <Link to="/b1/" className="link">
        <Svg3 className="svg3" />
        
          
        </Link>
      </div>

    </div>
  );
};

export default Cards;
