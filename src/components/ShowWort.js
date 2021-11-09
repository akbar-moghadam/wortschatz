import React from "react";
import { AllWort } from "../data/a1";
import "../styles/a1.scss";
function Wort(props) {
  const AllWortLenght=AllWort.filter(
    (wort) =>
      wort.grupp === props.Send.name && wort.subgrupp === props.Send.type
  ).length;
  let data=null;
  if(AllWortLenght>0){
    data = (
      <ul className="showwort-ul">
        {AllWort.filter(
          (wort) =>
            wort.grupp === props.Send.name && wort.subgrupp === props.Send.type
        ).map((filterdata) => (
          <li className="showwort-li">
            <span className="showwort-spanl">{filterdata.wort}</span>
            <span className="showwort-spanr">{filterdata.trans}</span>
          </li>
        ))}
      </ul>
    );
  }else {
    data = (<h3 style={{backgroundColor:null}}>leider gibt es nicht wort</h3>)
  }
  
  return <div className="showwort-container">{data}</div>;
}

export default Wort;
