import React, { useState, useEffect } from "react";
import { AllWort } from "../data/a1";
import "../styles/a1.scss";

function Test(props) {
  const k=props.store[0];
  
  const [nextItem, setNextItem] = useState(k);
  const [vorrnd, setVorrnd] = useState([]);
  
  const [rndoSelect, setRndoSelect] = useState([{id:'',name:''}])

  useEffect(() => {
    vorodi();
    // antwortRandom();

    fillData();
  }, [nextItem]);
const vorodi = () => {

}
  const antwortRandom = () => {
    setVorrnd([]);
    for (let j = 0; j < 4; j++) {
      let rnd = Math.floor(Math.random() * 4 + 1);
      while (vorrnd.lastIndexOf(rnd) !== -1) {
        rnd = Math.floor(Math.random() * 4 + 1);
      }

      setVorrnd(vorrnd.push(rnd));
      
    }
    // console.log(vorrnd)
    

  };
function inhaltText(id) {
  const k=AllWort.filter((wort) => wort.code === props.code)
  .filter((filterdata) => filterdata.id === id).map((f) => f.trans)
  return k
}
const fillData = () => {
  setRndoSelect([])
  // console.log("filldata")
  // let rndSelect=["","","",""];
  // rndSelect.length=0;
  // console.log(rndSelect,"first time")
  // let otherrnd=0;
  // console.log(nextItem,"ziel")
  const lenArr=AllWort.filter((wort) => wort.code === props.code).length;
  let rnd = Math.floor(Math.random() * 3 + 1);
  // otherrnd=rnd;
  const p= AllWort.filter((wort) => wort.code === props.code)
 .filter((filterdata) => filterdata.id === nextItem).map((f) => f.trans)
//  rndSelect[rnd]=p
// setRndoSelect(item => [...item,p]);
// rndoSelect.push(p);
setRndoSelect([...rndoSelect,{id:nextItem,name:p}])
console.log(p)
//  console.log(rndSelect)
//  console.log("first rnd",rnd)
 for(let j=0;j<4;j++){
  //  if(rndSelect[j]==="" ){
    rnd=Math.floor(Math.random() * lenArr - 1);
    let op= inhaltText(rnd)
  //   // console.log(rnd,"if")
  //   while(rndSelect.includes(op) || rnd===nextItem || rnd<=0){
  //     rnd=Math.floor(Math.random() * lenArr - 1); 
  //    op= inhaltText(rnd)
  //   //  console.log(rnd,"while")
  //   }
  //  rndSelect[j]=op;
  console.log(op);
   setRndoSelect([...rndoSelect,{id:nextItem,name:op}])
//  rndoSelect.push(op);
  //  }

  console.log(rndoSelect)
 }
//  let oop;
//  for(let i=0; i<4; i++){
//   let k=rndSelect[i];
//   console.log("k=",k);
//   let t=0;
//   // let k1=rndSelect.indexOf(k);
//   //  let k2=rndSelect.lastIndexOf(k);
//   //  console.log("i=",i,"k1=",k1,"k2=",k2)
//   for(let j=0; j<4; j++){
//     if(k===rndSelect[j]){
//       t=t+1;
//     }
//   }
//   console.log("t",t);
//    if(t>=2 ){
// // console.log("repet")
// rnd=Math.floor(Math.random() * lenArr - 1);
//   oop= inhaltText(rnd)
// while(rndSelect.indexOf(oop)>=0){
//   rnd=Math.floor(Math.random() * lenArr - 1);
//   oop= inhaltText(rnd)
// }
// rndSelect.splice(i,1,oop)
//    }
//  }
 
 
//  console.log("array=",rndSelect)
  console.log("usestate",rndoSelect)
  // console.log(rndoSelect[0])
}
 function handelClick() {
     setNextItem(nextItem+1)
 }
  const data = AllWort.filter((wort) => wort.code === props.code)
    .filter((filterdata) => filterdata.id === nextItem)
    .map((filterdata) => (
      <div>
        {filterdata.id === nextItem && (
          <div className="wort">{filterdata.wort}</div>
        )}
      </div>
    ));
const testData=rndoSelect.map((item) => (
  <div className="testdata" onClick={handelClick} key={item} >
 <h3 >{item}</h3>
  </div>
   
    
  
));

  return (
    <div className="test">
      <div className="test-title"><h2>{data}</h2></div>
      <div className="test-container" onClick={handelClick}>
       
        {testData}
      </div>
    </div>
  );
}

export default Test;
