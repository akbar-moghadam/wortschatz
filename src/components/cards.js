import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { ReactComponent as Svg1 } from "../assets/imgs/card1.svg";
import { ReactComponent as Svg2 } from "../assets/imgs/card2.svg";
import { ReactComponent as Svg3 } from "../assets/imgs/card3.svg";
const Cards = () => {
useEffect(() => {
  Aos.init();
}, [])

  return (
    <div className="cards-container">

      <div className="card1" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">
        <Link to="/a1/" className="link">
          <Svg1 className="svg1" />

          
          
        </Link>
      </div>

      <div className="card2" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
      <Link to="/a2/" className="link">
        <Svg2 className="svg2" />
        
          
        </Link>
      </div>

      <div className="card3" data-aos="fade-right" data-aos-offset="250" data-aos-easing="ease-in-sine">
      <Link to="/b1/" className="link">
        <Svg3 className="svg3" />
        
          
        </Link>
      </div>

    </div>
  );
};

export default Cards;
