import React from "react";
import "./Loader.css";

function Loader(){
    let items = [];
    createArr();
    function createArr(){
        for(let i= 0; i < 20; i++)
            items.push(i+1);
    }
    return(
        <section id="loader">
            <div className="loader-header">
                <h1>Loading</h1>
            </div>
            <div className="loader-container">
                {items.map((item,index)=>{
                    return <div className="line"></div>;
                })}
            </div>
        </section>
    );
}

export default Loader;