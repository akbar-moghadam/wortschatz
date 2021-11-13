import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/nav.scss";

const Nav = () => {
  const [check, setCheck] = useState(true);
  
  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 100);
    
}
  return (
    <div className={check ? "header-nav" : "header-nav-over"}>
      <div className="nav">
        <div className="brand">
        <Link to="/" className="link">
            <h1>wortschatz</h1>
          </Link>
        </div>
        <div className="alert">
          <h3>anfang</h3>
        </div>
        <div className="menu">
          {check ? (
            <FaBars className="fabars" onClick={() => setCheck(!check)} />
          ) : (
            <MdClose className="fabars" onClick={() => setCheck(!check)} />
          )}
        </div>
        <div className={check ? "side-menu-h" : "side-menu-sh nover"}>
          <div className="side-menu">
            <Link to="/" className="link">
              <span className="home">Home</span>
            </Link>
            <Link to={'/a1/'} onClick={refreshPage} className="link" >
              <span className="home">DEUTSCH A1</span>
            </Link>
            <Link to={'/a2/'} onClick={refreshPage} className="link">
              <span className="home">DEUTSCH A2</span>
            </Link>
            <Link to={'/b1/'} onClick={refreshPage} className="link">
              <span className="home">DEUTSCH B1</span>
            </Link>
            <Link to={'/'}  className="link">
              <span className="home">sign in</span>
            </Link>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
