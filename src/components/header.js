import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import '../styles/nav.scss'
import Button from './button'

const Header = () => {
    useEffect(() => {
      Aos.init()
    }, [])
    return (
        <div className="header" >
            
            <div className="header-body" data-aos="zoom-out">
                <div className="left" >
                    <h2>Learn vocabulary without an internet connection</h2>
                    <h5>Learn vocabulary in just 5 minutes a day</h5>
                    <Button text="Start Now"/>
                </div>
             
            </div>
        </div>
    )
}

export default Header
