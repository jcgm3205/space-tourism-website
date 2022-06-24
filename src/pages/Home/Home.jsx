import React from "react";
import Header from "../../components/Header/Header";

import "./Home.css";

export default function Home(){

    return(
        <div className="container bg-home">
            <Header />
            
            <div className="cont-wrapper">
                <section className="home-text">
                    <h5 className="home__hdng05 home__hdng05--fs home__hdng05--le-sp" >So, you want to travel to</h5>
                    <h1 className="home__hdng01 home__hdng01--fs" >Space</h1>
                    <p className="home__bodytext">Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!</p>
                </section>
                <section className="home-btn-cont">
                    <button className="home__circbtn" >EXPLORE</button>    
                </section>
            </div>    
        </div>
    );
}