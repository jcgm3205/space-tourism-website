import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";

export default function NavBar({activeClass,func}){

    let condClass01 = activeClass === true ? "visible" : "";

    return(
        <nav className={`navbar ${condClass01}`}>
            <button className="cross-btn" onClick={func} >
                <FontAwesomeIcon icon={faXmark} className="icon" />
            </button>
            <ul className="navbar-linklist">
                <li className="navbar-item">
                    <NavLink to="/" activeclassname="active" className="navbar__link">
                        <span className="navbar__link--text-bold navbar__link--disp">00</span> HOME
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/destination" activeclassname="active" className="navbar__link">
                        <span className="navbar__link--text-bold navbar__link--disp">01</span> DESTINATION
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/crew" activeclassname="active" className="navbar__link">
                        <span className="navbar__link--text-bold navbar__link--disp">02</span> CREW
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/technology" activeclassname="active" className="navbar__link">
                        <span className="navbar__link--text-bold navbar__link--disp">03</span> TECHNOLOGY
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}