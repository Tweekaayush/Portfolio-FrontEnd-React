import React, { useState } from "react";
import "./Navbar.css";
import {Link} from "react-scroll";

function Navbar(){

    const [scroll, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false);

    var resizeTimer;
    window.addEventListener("resize", ()=>{
        if(document.body.clientWidth>780)
            setToggle(false);
            document.body.classList.add("resize-animation-stopper");
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
              document.body.classList.remove("resize-animation-stopper");
            }, 400);
    });

    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 60) 
            setScroll(true);
        else if(window.scrollY <= 60){
            if(toggle === false)
                setScroll(false);
            else if(toggle === true)
                setScroll(true);
        } 
    });

    function navToggle(){
        setToggle(!toggle);
        if(toggle === false)
            setScroll(true);
        else if(window.scrollY <= 60) setScroll(false);
    }

    return(
        <nav className={scroll? "navbar scrolled":"navbar"}>
            <a href="home" className="nav-brand">
                AD
            </a>
            <ul className={toggle?"nav-links nav-active":"nav-links"}>
                <li>
                    <Link to="home" spy={true} smooth={true} duration={500} className="nav-item">Home</Link>
                </li>
                <li>
                    <Link to="about" spy={true} smooth={true} offset={-50} duration={500} className="nav-item">About</Link>
                </li>
                <li>
                    <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className="nav-item">Projects</Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className="nav-item">Contact</Link>
                </li>
            </ul>
            <div className={toggle?"nav-toggler toggle":"nav-toggler"} onClick={navToggle}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;