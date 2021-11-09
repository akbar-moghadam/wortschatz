import React,{useState} from 'react'
import { findAllInRenderedTree } from 'react-dom/test-utils'

function Testt(props) {
const [item, setItem] = useState([{id:0 ,name:""}])
// console.log("code=",props.code)
// console.log("store=",props.store)
// console.log("num=",props.num)
function chera() {
    setItem(t =>[...t,{
        id:1,
        name:"sanam"
    }])
   findArr()
}
function findArr( ) {
    for(let k in item){
        // console.log(item[k].name)
        const p=repeat(item[k].name)
        console.log(item[k].name,"=",p.sum,"index=",p.h);
        // const p=item[k].name;
        // const check=item.some(n => n.name=== p)
        // console.log(check);
        // // let sum=0;
        // for(let n in item){
        //     if(item[k].name===item[n].name){
        //         console.log(item[k].name)
        //         sum=sum+1
        //     }
        // }
        // console.log(item[k].name,"=",sum)
        console.log(item)
    }
}

function repeat(s) {
    let sum=0, h=-1;
    for(let i=0;i<item.length-1;i++){
        if(item[i].name === s){
            sum=sum+1;
        }
        if(sum>=1){
            h=i;
        }
    }
    return ({sum,h})
}

    return (
        <div>
            
            <button onClick={chera}>click</button>
        </div>
    )
}

export default Testt