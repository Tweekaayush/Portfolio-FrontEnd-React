import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai";
import "./Home.css";
import Typed from "react-typed";
import {Link} from "react-scroll";
import Canvas from "./Canvas";

function Home(){
    return(
        <section id="home" className="home">
            <Canvas/>
            <div className="heading">
                Hello, I'm
                <span> </span>
                <span className="a">A</span>
                <span className="a">a</span>
                <span className="a">y</span>
                <span className="a">u</span>
                <span className="a">s</span>
                <span className="a">h</span>
                <span> </span>
                <span className="a">D</span>
                <span className="a">o</span>
                <span className="a">b</span>
                <span className="a">r</span>
                <span className="a">i</span>
                <span className="a">y</span>
                <span className="a">a</span>
                <span className="a">l</span>
                .
                <br/>
                I am a <Typed strings={["Front-End Developer.", "UI/UX Designer."]} typeSpeed={50} backSpeed={60} backDelay={2000} loop />
            </div>
            <Link to="projects" spy={true} smooth={true} duration={500} offset={-40} className="btn">
                <span>View my work.</span>
                <span className="iconSpan"><AiOutlineArrowRight className="icon"/></span>
            </Link>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
        </section>
    );
}

export default Home;
