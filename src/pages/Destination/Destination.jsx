import React from "react";

import DestinationContent from "../../components/DestinationContent/DestinationContent";
import Header from "../../components/Header/Header";
import "./Destination.css";

export default function Destination(){
    return(
        <div className="container bg-dest">
            <Header />
            <main className="dest-main-cont" >
                <h1 className="dest__title" >
                    <span className="dest__title--bold dest__title--opaque dest__title--mr" >01</span> PICK YOUR DESTINATION
                </h1>
                <DestinationContent />
            </main>
             
        </div>
    );
}