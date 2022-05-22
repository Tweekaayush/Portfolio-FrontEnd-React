import React from "react";
import "./TechBar.css";
function TechBar(props){

    var lengthPercentage = props.percentage * 0.8;
    var barPercentage = (100-props.percentage) * 0.8;

    return (
        <div className="techBar">
            <div className="bar-head">
                {props.title}
            </div>
            <div className="bar-length"style={{width:String(lengthPercentage + "%")}}>
                {props.percentage}%
            </div>
        </div>
    );
}

export default TechBar;