import React,{useEffect} from 'react'
import { ReactComponent as Head } from "../assets/imgs/headphone.svg";

import '../styles/horen.scss';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
const Horen = () => {
    useEffect(() => {
        Aos.init();
      }, [])
    return (
        <div className="horen-container">
            <div className="horen-title" data-aos="flip-up">
                <h2>Speed up your German learning by listening.</h2>
                <Link to="/listen/" className="horen-link">Listen and Exam </Link>
            </div>
            <div className="horen-icon" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <Head className="head"/>
                
            </div>
        </div>
    )
}

export default Horen
