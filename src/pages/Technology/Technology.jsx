import React from "react";

import Header from "../../components/Header/Header";
import TechDetails from "../../components/TechDetails/TechDetails";
import "./Technology.css";

export default function Technology(){
    return(
        <div className="container bg-tech">
            <Header />
            <main className="tech-main-cont">
                <h1 className="tech__title" >
                    <span className="tech__title--bold tech__title--opaque" >03</span> SPACE LAUNCH 101
                </h1>
                <TechDetails />
            </main> 
        </div>
    );
}