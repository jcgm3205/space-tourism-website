import React, {useState} from "react";

import data from "../../../assets/data/data.json";
import "./CrewDetails.css";

export default function CrewDetails(){

    const [flag, setFlag] = useState("0");
    
    function handleFlag(e){
        setFlag(e.target.id);    
    }

    const obj = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three" 
    }

    return(
        
        <>
            <div className="details-img-cont">
                <img    className="details__img"
                        src={data.crew[parseInt(flag)].images.webp}
                        alt={data.crew[parseInt(flag)].name} />
            </div>
            

            <div className={`details-content-wrapper ${obj[flag]}`}>
                <div className="sliderOne-btn-cont">

                {
                    data.crew.map( (entry, i) => (
                        <button key={entry.name} 
                                id={i}
                                className="sliderOne__btn"
                                onClick={handleFlag}
                                disabled={ parseInt(flag) === i } ></button>
                    ))
                }
                </div>

                <div className="details-personal-info-wrapper">
                    <h4 className="details__role">{data.crew[parseInt(flag)].role}</h4>
                    <h3 className="details__name">{data.crew[parseInt(flag)].name}</h3>
                    <p className="details__bio" >{data.crew[parseInt(flag)].bio}</p>
                </div>                           
            </div>
                          
        </>
    );
}