import React from 'react'
import {HorenData} from "./horendata"
import "../styles/horen.scss"
import {FaCaretRight} from 'react-icons/fa'
const HorenItem = () => {

    const Horen=HorenData.map((item) => {
        return(
            <div key={item.id} className="Horen">
                <h5>{item.title}</h5>
                <h5>{item.hortype}</h5>
                <h5>{item.hortime}</h5>
                <h5><FaCaretRight/></h5>
            </div>
        )
    } )
    return (
        <div className="horenitem-container">
            <div className="horenitem-title">
                <h2>Listen</h2>
                <div className="horenitem-select">
                    <label htmlFor="listen" className="labelitem">Select Level</label>
                    <select name="listen" id="listen" className="selectitem">
                        <option value="all">All</option>
                        <option value="a1">A1</option>
                        <option value="a2">A2</option>
                        <option value="b1">B1</option>
                    </select>
                </div>
            </div>
            <div className="horenitem-body">
                {Horen }
            </div>
            
        </div>
    )
}

export default HorenItem
