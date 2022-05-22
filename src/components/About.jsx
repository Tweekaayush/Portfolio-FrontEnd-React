import React from "react";
import {Grid} from "@mui/material";
import "./About.css";
import TechBar from "./TechBar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {DiResponsive} from "react-icons/di";
import {FaRocket} from "react-icons/fa";
import {BiFastForward} from "react-icons/bi";
import skills from "../skills";
import profileImg from "../assets/images/IMG_1670.JPG";

function About(){

    AOS.init({
        once: true,
        offset:200,
        duration: 500
    });

    function createSkills(skill){
        return <TechBar key = {skill.id} title= {skill.title} percentage = {skill.percentage} />;
    }

    return(
        <section className="about" id="about">
            <div className="about-heading">
                <h1 data-aos = "fade-right">About</h1>
                <hr data-aos="fade-right" data-aos-delay="200"/>
            </div>
            <Grid container spacing={2} className="upperAboutSection" data-aos= "fade-up">
                <Grid item xs={12} sm={4} className="about-box">
                    <div className="box-img"><DiResponsive/></div>
                    <div className="box-heading">
                        <h1>Responsive</h1>
                    </div>
                    <div className="box-content">
                        <p>My layouts will work on any device, big or small.</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} className="about-box">
                    <div className="box-img"><FaRocket/></div>
                    <div className="box-heading">
                        <h1>Dynamic</h1>
                    </div>
                    <div className="box-content">
                        <p>I love making pages come to life.</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} className="about-box">
                    <div className="box-img"><BiFastForward/></div>
                    <div className="box-heading">
                        <h1>Fast</h1>
                    </div>
                    <div className="box-content">
                        <p>Fast load times and lag free interaction.</p>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={2} className="lowerAboutSection">
                <Grid item xs={12} md={6} className="left-about" data-aos="fade-right">
                    <div className="my-img">
                        <img src={profileImg} alt="" />
                    </div>
                    <div className="my-desc">
                    I am a Frontend Developer.
                    I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.

                    </div>
                </Grid>
                <Grid item xs={12} md={6} className="right-about" data-aos="fade-left">
                    {skills.map(createSkills)}
                </Grid>
            </Grid>
        </section>
    )
}

export default About;