// @ts-ignore
import React from "react";
// @ts-ignore
import {Link, Route, Routes} from "react-router-dom"
import Logo from "../assets/134-1349206_nba-logo-png-transparent-background-nba-logo-transparent-background 2.jpg"
import "../App.css"
import "../assets/esp/esp_bdit.ttf"

export default function Navbar() {
    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav id="nav">
            <img id="nba-logo" src={Logo} alt="nba-logo" />
            <h1 id="nav-header">NBA stat tracker</h1>
            <button className="menu-btn" onClick={toggleMenu}>
                {showMenu ? "Hide Menu" : "Show Menu"}
            </button>
            <div className={`nav-links ${showMenu ? 'show' : ''}`}>
                <Link to="/" className="nav-btn" onClick={toggleMenu}>
                    Home
                </Link>
                <Link to="/Teams" className="nav-btn" onClick={toggleMenu}>
                    Teams
                </Link>
                <Link to="/Players" className="nav-btn" onClick={toggleMenu}>
                    Players
                </Link>
                <Link to="/MyTeams" className="nav-btn" onClick={toggleMenu}>
                    My Teams
                </Link>
                <Link to="/About" className="nav-btn" onClick={toggleMenu}>
                    About
                </Link>
                <Link to="/Contact" className="nav-btn" onClick={toggleMenu}>
                    Contact
                </Link>
            </div>
        </nav>
    );
}