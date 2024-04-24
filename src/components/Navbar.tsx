// @ts-ignore
import React from "react";
// @ts-ignore
import {Link, Route, Routes} from "react-router-dom"
import Logo from "../assets/134-1349206_nba-logo-png-transparent-background-nba-logo-transparent-background 2.jpg"
import "../App.css"
import "../assets/esp/esp_bdit.ttf"

export default function Navbar(){
    return (
        <nav id="nav">
            <img id="nba-logo" src={Logo}alt="nba-logo" />
            <h1 id="nav-header">NBA stat tracker</h1>
            <Link to="/" className="nav-btn">Home</Link>
            <Link to="/Teams" className="nav-btn">Teams</Link>
            <Link to="/Players" className="nav-btn">Players</Link>
            <Link to="/MyTeams" className="nav-btn">My Teams</Link>
            <Link to="/About" className="nav-btn">About</Link>
            <Link to="/Contact" className="nav-btn">Contact</Link>
        </nav>
    )
}