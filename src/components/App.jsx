import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

function App(){
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Projects /> 
            <Contact /> 
            <Footer/>
        </div>
    );
}

export default App;