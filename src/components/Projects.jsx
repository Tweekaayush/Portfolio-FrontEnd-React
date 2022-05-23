import React, {useState} from "react";
import "./Projects.css";
import Card from "./Card";
import {Grid} from "@mui/material";
import projects from "../projects";
import AOS from 'aos';
import 'aos/dist/aos.css';
import myResume from "../assets/pdf/myResume.pdf";

function Project(){
    AOS.init({
        once: true,
        offset:200,
        duration:500
    });

    function createCard(project){
        return(
        <Grid key = {project.id} item xs={10} md={6} lg={3}>
            <Card key={project.id} img = {project.img} title = {project.title} link={project.link} />
        </Grid>
        );
    }

    return(
        <section id="projects" className="projects">
                <div className="projects-heading">
                    <h1 data-aos="fade-right">Projects</h1>
                    <hr data-aos="fade-right" data-aos-delay="200" />
                </div>
                <hr className="projectHeadLine"/>
                <Grid container spacing={2} className="project-list" data-aos="fade-up">
                    {projects.map(createCard)}
                </Grid>
                <hr className="projectFootLine"/>
                <div className="projects-footer">
                    <h1>Download My Resume/Cv here.</h1>
                    <hr />
                    <a href={myResume} download="Resume">Download</a>
                </div>
        </section>
    );
}

export default Project;