import React from "react";
import {GrClose} from "react-icons/gr"
import "./Card2.css";


function Card2(props){
    console.log(props);
    return(
        <div className="card2-container">
            <div className="img-container">
                <img src={props.img} alt="" />
            </div>
            <div className="content">
                <h1>{props.title}</h1>
                <hr />
                <p>{props.content}</p>
            </div>
            <div className="card2-footer">
                <a className="card2-btn">View Site</a>
                <GrClose/>
            </div>
        </div>
    );
}

export default Card2;