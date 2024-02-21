import React from "react";

export default function Navbar(){
    return (
        <nav id="nav">
            <img id="nba-logo" src="src/assets/logo.png" alt="nba-logo" />
            <h2 id="nav-header">NBA stat tracker</h2>
            <button className="nav-btn" id="teams">Teams</button>
            <button className="nav-btn" id="players">Players</button>
            <button className="nav-btn" id="my-teams">My Teams</button>
            <button className="nav-btn" id="my-players">My Players</button>
            <button className="nav-btn" id="contact">contact & updates</button>
        </nav>
    )
}