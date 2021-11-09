import React,{useState,useEffect} from 'react'
import { AllWort } from "../data/a1";

import "../styles/a1.scss";

const GetItem = (code,state) => {

  let allDataItem=code
  let item=[];
  let allData=allDataItem.filter((wid) => wid.id !== state);
  
  let antwort=allDataItem[state-1].trans
  
  while(item.length<4){
    let lenAllData=allData.length;
   const rnd=Math.floor(Math.random() * lenAllData - 1); 
   if(rnd>=0){
    item.push(allData[rnd].trans);
    let idData=allData[rnd].id;
    allData=allData.filter((wort) => wort.id !== idData);
    lenAllData=allData.length;
    
   }
  }
  const rnditem=Math.floor(Math.random() *3)
  item.splice(rnditem,1,antwort)
  
  
return {item,antwort}

   
   
  }
const Schnell = (props) => {
    const Codee = AllWort.filter(
        (wort) =>
          wort.grupp === props.Send.name && wort.subgrupp === props.Send.type
      );
      const p=Codee.length;
      // let RndId=Frnd;
      const [zahl, setZahl] = useState(0)
      const [rnd, setRnd] = useState(Frnd())
     let ant=null;
     
      function Frnd() {
        let t=Math.floor((Math.random() * p-1)+1)
        if(t>0 && t<=p){
          return t
        }else{
           t=Math.floor((Math.random() * p-1)+1)
          while(t<=0 || t>p){
             t=Math.floor((Math.random() * p-1)+1)
          }
          return t
        }

      } 
    useEffect(() => {
      
      setRnd(() => Frnd())
    }, [zahl])    
    
    


const Title =   Codee.filter((wort) => wort.id === rnd)
.map((filterdata) => (
  <>
    { (
      <h2 className="datatitle-wort">{filterdata.wort}</h2>
    )}
  </>
));


    const DisPach= () => {
     setTimeout(() => {
      setZahl(()=> zahl+1)  
     }, 700);
      
    }
    
    const k=GetItem(Codee,rnd)
    
      ant=k.antwort;
    
    
     
     
     function checkAntwort(event,index) {
        const Select=event.target.value;
       const sitem='item'+index
        
        const k= document.getElementById(sitem);
        if(Select === ant){
          k.style.backgroundColor='green'
        }else{
          k.style.backgroundColor='red'
        }
        setTimeout(() => {
          k.style.backgroundColor=null
        },700)
       
      }
    
    return (
        <div className="schnell-container">
            <div className="schnell-title"><h3>{Title}</h3></div>
            <div className="testitem-container"> {k.item.map((item,index) => (
            <div key={index} className="testitem" id={'item'+index} ><button  value={item} onClick={(e) => {checkAntwort(e,index); DisPach()}} >{item}</button></div>

          ))}  </div>
        </div>
    )
}

export default Schnell
