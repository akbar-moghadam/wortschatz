import React from 'react'
import '../styles/nav.scss'
import Button from './button'

const Header = () => {
    return (
        <div className="header" >
            
            <div className="header-body">
                <div className="left">
                    <h2>Learn vocabulary without an internet connection</h2>
                    <h5>Learn vocabulary in just 5 minutes a day</h5>
                    <Button text="Start Now"/>
                </div>
             
            </div>
        </div>
    )
}

export default Header
