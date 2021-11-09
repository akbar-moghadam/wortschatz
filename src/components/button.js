import React from 'react'
import '../styles/App.scss'
const Button = (props) => {
    
    return (
        <div className="btn-container">
            <button className="btn">{props.text}</button>
        </div>
    )
}

export default Button
