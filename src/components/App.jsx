import React, {useState} from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Loader from "./Loader";

function App(){
    
    const [loading, setLoading] = useState(false);



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