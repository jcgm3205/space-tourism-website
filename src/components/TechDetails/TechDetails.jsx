import React,{useState} from "react";

import data from "../../../assets/data/data.json";
import "./TechDetails.css";

export default function TechDetails(){

    const [ident, setIdent] = useState("1");

    function handleIdent(e){
        setIdent(e.target.id);
    }

    return(
        <div className="techdetails-main-wrapper">

            <img    className="techdetails__img-mob"
                    src={data.technology[parseInt(ident)-1].images.landscape}
                    alt={data.technology[parseInt(ident)-1].name} />

            <img    className="techdetails__img-desk"
                    src={data.technology[parseInt(ident)-1].images.portrait}
                    alt={data.technology[parseInt(ident)-1].name} />        

            <div className="techdetails-intern-container">
                <div className="sliderTwo-btn-cont">
                    {
                        data.technology.map( (entry,i) => ( 
                            <button key={entry.name}
                                    id={i+1}
                                    onClick={handleIdent}
                                    disabled={ parseInt(ident) === i+1 }
                                    className="sliderTwo__btn" >{i+1}</button>
                        ))
                    }
                </div>

                <section className="techdetails-info-wrapper">
                    <p className="techdetails__subhdng02">THE TERMINOLOGY...</p>
                    <p className="techdetails__subhdng01">{data.technology[parseInt(ident)-1].name}</p>
                    <p className="techdetails__desc">{data.technology[parseInt(ident)-1].description}</p>
                </section>
            </div>
            
                    
        </div>
    );
}