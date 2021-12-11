import React from 'react'
import { AllWort } from "../data/a1";

 const GetItem = (store,code) => {
 
  let allDataItem=AllWort.filter((wort) => wort.code === store)
  let item=[];
  let allData=AllWort.filter((wort) => wort.code === store).filter((wid) => wid.id !== code);
  
  let antwort=allDataItem[code-1].trans
  
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
function Checked(k) {
  
  k=true
  return k
}
function TestItem(props) {
  const status=false
    const k=GetItem(props.store,props.code)
    const ant=k.antwort;
   
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
     Checked(status)
    }
  
    return (
        <div className="testitem-container">
          {k.item.map((item,index) => (
            <div key={index} className="testitem" id={'item'+index}><button  value={item} onClick={(e) => checkAntwort(e,index)} >{item}</button></div>

          ))}  
          
        </div>
    )
}

export default{TestItem ,Checked}
