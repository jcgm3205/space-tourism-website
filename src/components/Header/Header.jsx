import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../NavBar/NavBar";
import logo from "../../../assets/shared/logo.svg";
import "./Header.css";

export default function Header(){

    const [activeClass, setActiveClass] = useState(false)

    const toggleClass = () => {
        setActiveClass(!activeClass);        
    }

    let condClass02 = activeClass === true ? "inv" : "";

    return(
        <header className="hdr">
            <img className="hdr__logo"
                    src={logo}
                    alt="Logo"   />
            <button className={`hdr__burger-btn ${condClass02}`} onClick={toggleClass} >
                <FontAwesomeIcon icon={faBars}  />
            </button>
            <NavBar activeClass={activeClass} func={toggleClass} />
        </header>         
    );
}