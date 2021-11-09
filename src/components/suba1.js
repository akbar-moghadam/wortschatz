import React, { useContext,useState } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { showDetailsContext } from "../contexts/ShowContext";
import Wort from './Wort'
import ShowWort from './ShowWort'
import { AllWort } from "../data/a1";
import "../styles/a1.scss";
import Schnell from "./Schnell";

function Suba1() {
  const [show] = useContext(showDetailsContext);
  const [showLernen, setShowLernen] = useState(false);
  const [showSchnell, setshowSchnell] = useState(false);
  
  let { path } = useRouteMatch();

  let q = path.slice(1, 3);

  let { slug } = useParams();
  const wortCount=AllWort.filter((cnt) => cnt.grupp===q && cnt.subgrupp===slug).length
  const Select={name:q, type:slug}
 
  function handelLernen(){
    setShowLernen(!showLernen);
    
    if(showSchnell){
      setshowSchnell(!showSchnell)
    }
  }
  function handelSchnell(){
    setshowSchnell(!showSchnell);
    
    if(showLernen){
      setShowLernen(!showLernen)
    }
  }
  return (
    <div className={show ? "sub-container-hide" : "suba-container-show"}>
      <div className="title">
        <h1>{q.toUpperCase()}</h1>
        <h1>{slug.toUpperCase()}</h1>
      </div>
      
      <div className="body">
        
        <div className="sub-body">
          <div className="lernen"><h4 onClick={handelLernen} className={showLernen ? "lernencolor" : "lernen-body"}>Learn</h4></div>
        <div className="schnell"><h4 onClick={handelSchnell} className={showSchnell ? "schnellcolor" : "schnell-body"}>Speed review</h4></div>
        </div>
        <div className="wortcontainer">
        
        {showLernen && wortCount>0 ? <Wort Send={Select}/> : showSchnell && wortCount>0 ? <Schnell Send={Select}/>: <ShowWort Send={Select}/>}
        
        </div>
      </div>
      {/* <button className="btn" onClick={handleClick}>Back</button> */}
    </div>
  );
}

export default Suba1;
