import React from "react";
import "./Card.css";

function Card(props){
    return (
            <div className="card-container">
                <img src={props.img} alt="" className="card-img" />
                <div className="card-content">
                    <h1 className="card-title">{props.title}</h1>
                    <a href="" className="card-btn">Visit Website</a>
                </div>
            </div>
    );
}

export default Card;