import React from "react";
import {Link, Route, Routes} from "react-router-dom"

export default function Navbar(){
    return (
        <nav id="nav">
            <img id="nba-logo" src="src/assets/logo.png" alt="nba-logo" />
            <h2 id="nav-header">NBA stat tracker</h2>
            <Link to="/" className="nav-btn" >Home</Link>
            <Link to="/Teams" className="nav-btn" >Teams</Link>
            <Link to="/MyTeams" className="nav-btn" >My Teams</Link>
            <Link to="/About" className="nav-btn" >About/Contact</Link>
        </nav>
    )
}