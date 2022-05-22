import React from "react";
import {FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaAngleDoubleUp, FaRegCopyright } from "react-icons/fa";
import {Link} from "react-scroll";
import "./Footer.css";

function Footer(){
    return(
        <footer>
            <Link to="home" spy={true} smooth={true} offset={-75} duration={500}> <button className = "footer-btn"><FaAngleDoubleUp/></button></Link>
            <div className="icons">
                    <a href="">
                        <div className="item"><FaGithub/></div>
                    </a>
                    <a href="">
                        <div className="item"><FaLinkedin/></div>
                    </a>
                    <a href="">
                        <div className="item"><FaInstagram/></div>
                    </a>
                    <a href="">
                        <div className="item"><FaFacebook/></div>
                    </a>
            </div>
            <div className="copyright">AayushDobriyal <FaRegCopyright/> 2022</div>
        </footer>
    )
}

export default Footer;