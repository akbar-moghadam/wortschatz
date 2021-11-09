import React, { useState, useEffect } from "react";
import { AllWort } from "../data/a1";
import SelectWort from "./selectwort";
// import Test from "./Test";
import "../styles/a1.scss";
import TestItem from "./TestItem";


function getStore(code) {
  
  let k = 0;
  
  
 
  // localStorage.clear();
  if (localStorage.hasOwnProperty(code) === true) {
    const x = JSON.parse(localStorage.getItem(code));
    k = x + 1;
  } else {
    //localStorage.setItem(Store, JSON.stringify({store: 1}))
    localStorage.setItem(code, 1);
    
    k = 1;
  }
  return k;
}

function Wort(props) {
  const Codee = AllWort.filter(
    (wort) =>
      wort.grupp === props.Send.name && wort.subgrupp === props.Send.type
  );
  const Store = String(Codee[0].code);
  const len = AllWort.filter((wort) => wort.code === Store).length;
  const [wortNum, setWortNum] = useState(() => getStore(Store));
  const [jump, setJump] = useState()
  const [checkJump, setCheckJump] = useState(3)
  const [checkLen, setCheckLen] = useState(true);
  
  const [wahl, setWahl] = useState(true);
  const [checkVal] = useState(checkedLen());
  const [gch, setGch] = useState(0)
  const [change, setChange] = useState(false);
  
  const [checked, setChecked] = useState([]);
  const [testNum, setTestNum] = useState(1);
  const [allItem, setAllItem] = useState([]);
  const [numShowItem, setNumShowItem] = useState(0);
  const [startNum, setStartNum] = useState(true);
  const CheckTestItem=TestItem.Checked
  
  
  

  useEffect(() => {
    
    checkedLen();
    checkLenght();
   
  },[wortNum]);

 

  function AddWort(wNum){
setChecked([...checked,wNum])
setAllItem([...allItem,wNum])

  }

  function checkLenght() {
    
    if(startNum){
      let b=checkVal-checkJump
      if(b>=3 || checkVal === checkJump){
        
        setJump(3)
        setCheckJump(c => c+3)
        
        setStartNum(!startNum)
      }else{
        
        setJump(b)
        setStartNum(!startNum)
      }
     
    }
    
    if(checked.length>=jump){
      setWahl(!wahl)
      setTestNum(1);
      
      
    }
    
  }
 
  function checkedLen() {
    if (checkLen) {
      if (wortNum < len) {
        if (len - wortNum > 9) {
          const a = wortNum + 8;
          
          return a

        } else {
          
          return len-wortNum
        }
        
      }
      setCheckLen(!checkLen);
      
      
    }
    
    
  }

  function finishClick() {
    
  }

  function handelClick() {
    if (wortNum === checkVal) {
      setChange(!change);
      localStorage.setItem(Store, wortNum);
      setWahl(!wahl)
      setTestNum(1);
      AddWort(wortNum)
    }else{
     
      setWortNum(wortNum + 1);
      AddWort(wortNum)
    }
    
   
  }


const dataTitle =   AllWort.filter((wort) => wort.code === Store)
.filter((filterdata) => filterdata.id === allItem[numShowItem])
.map((filterdata) => (
  <>
    {filterdata.id === allItem[numShowItem] && (
      <h2 className="datatitle-wort">{filterdata.wort}</h2>
    )}
  </>
));


function testCheck() {
 
  setTimeout(() => {
    
  if(testNum===jump){
   
    setWahl(!wahl)
     
    setStartNum(!startNum)
    
    checked.length=0;
    
   
    setNumShowItem(numShowItem+1)
  }else{
    setTestNum(testNum+1)
    setNumShowItem(numShowItem+1)
  
  }
  if (wortNum === checkVal) {
    setChange(!change);
    localStorage.setItem(Store, wortNum);
  }
  setGch(gch+1)
  }, 700);

}
const Test=
 
    <div className="test-container">
    
    <div className="test-container-title"><h3>{dataTitle}</h3></div>
    <div onClick={CheckTestItem ? testCheck : ''}className="test-container-item"><TestItem.TestItem  store={Store} code={allItem[numShowItem]}/></div>
    </div>
  





  return (
    <div className="wort-container">
      <div>
        {wahl ? <SelectWort store={wortNum} code={Store}/> : Test  }
      </div>
      <div className="btn-next-container">
        <button onClick={change ? finishClick : handelClick} className={wahl ? "show-btn" : "hide-btn"}>
          {change ? "finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Wort;
