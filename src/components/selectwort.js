import React from "react";
import { AllWort } from "../data/a1";
import "../styles/a1.scss";


function SelectWort(props) {
  
    

    const data=AllWort.filter(wort => wort.code===props.code).filter(filterdata => filterdata.id === props.store).map(filterdata => (
        <div className="data-container">
            {filterdata.id === props.store &&
                <div className="wort">
                    <div className="deutschwort">
                    <h2>{filterdata.wort}</h2> 
                     <h5>{filterdata.type}</h5> 
                    </div>
                    <div className="perfect">
                    <h5>{filterdata.perfekt}</h5>
                    </div>
                    <div className="translate">
                        <h2>{filterdata.trans}</h2>
                    </div>
                </div> 
                         
            }
            
        </div>
    ));
    
  return (
      
    < >
      
        
          {data} 
       
          
        
      
    </>
    
  );
}

export default SelectWort;
