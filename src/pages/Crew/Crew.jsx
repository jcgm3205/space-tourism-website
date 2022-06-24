import React from "react";
import CrewDetails from "../../components/CrewDetails/CrewDetails";

import Header from "../../components/Header/Header";
import "./Crew.css";

export default function Crew(){
    return(
        <div className="container bg-crew">
            <Header />
            <main className="crew-main-cont">
                <h1 className="crew__title" >
                    <span className="crew__title--bold crew__title--opaque" >02</span> MEET YOUR CREW
                </h1>
                <CrewDetails /> 
            </main>  
        </div>
    );
}