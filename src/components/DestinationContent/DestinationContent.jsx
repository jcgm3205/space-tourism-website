import React, {useState} from "react";

import data from "../../../assets/data/data.json";
import "./DestinationContent.css";

export default function DestinationContent(){

    const [indicator, setIndicator] = useState("0");
    
    function handleIndicator(e){
        setIndicator(e.target.id);
    }

    return(
        <>
            <img    className="dest__img"
                    src={data.destinations[parseInt(indicator)].images.webp}
                    alt={data.destinations[parseInt(indicator)].name} />

            <div className="tab-wrapper">
                <section className="tab-btn-wrapper">
                    {
                        data.destinations.map( (entry,i) => (
                            <button className="dest__tab-btn"
                                    onClick={handleIndicator}
                                    disabled={ parseInt(indicator) === i } 
                                    key={entry.name} 
                                    id={i}>{entry.name}</button>
                        ))
                    } 
                </section>

                <div className="tab-content">
                    <h3 className="dest__destination-title">
                        {data.destinations[parseInt(indicator)].name}
                    </h3>
                    <p className="dest__desc" >
                        {data.destinations[parseInt(indicator)].description}
                    </p>
                </div>

                <div className="estimates-container">
                    <section className="average-distance-wrapper" >
                        <p className="title" >Avg. Distance</p>
                        <p className="quantity" >
                            {data.destinations[parseInt(indicator)].distance}
                        </p>
                    </section>
                    <section className="travel-time-wrapper" >
                        <p className="title" >Est. Travel Time</p>
                        <p className="quantity" >
                            {data.destinations[parseInt(indicator)].travel}
                        </p>
                    </section>
                </div>
            </div>            
        </>
    );
}