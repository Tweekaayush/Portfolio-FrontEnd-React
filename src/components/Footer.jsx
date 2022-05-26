import React from "react";
import {FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaAngleDoubleUp, FaRegCopyright } from "react-icons/fa";
import {SiCodechef} from "react-icons/si"
import {Link} from "react-scroll";
import "./Footer.css";

function Footer(){
    return(
        <footer>
            <Link to="home" spy={true} smooth={true} offset={-75} duration={500}> <button className = "footer-btn"><FaAngleDoubleUp/></button></Link>
            <div className="icons">
                    <a href="https://github.com/Tweekaayush">
                        <div className="item"><FaGithub/></div>
                    </a>
                    <a href="https://www.linkedin.com/in/aayush-dobriyal-896217192/">
                        <div className="item"><FaLinkedin/></div>
                    </a>
                    <a href="https://www.instagram.com/tweek_iwnl/">
                        <div className="item"><FaInstagram/></div>
                    </a>
                    <a href="https://www.codechef.com/users/tweek_iwnl">
                        <div className="item"><SiCodechef/></div>
                    </a>
            </div>
            <div className="copyright">AayushDobriyal <FaRegCopyright/> 2022</div>
        </footer>
    )
}

export default Footer;