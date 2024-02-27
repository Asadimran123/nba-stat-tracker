import React from "react";

type NavProps = {
    teams: () => void
    myTeams: () => void
}

export default function Navbar(props: NavProps){
    return (
        <nav id="nav">
            <img id="nba-logo" src="src/assets/logo.png" alt="nba-logo" />
            <h2 id="nav-header">NBA stat tracker</h2>
            <button className="nav-btn" id="teams-btn" onClick={props.teams}>Teams</button>
            <button className="nav-btn" id="players-btn">Players</button>
            <button className="nav-btn" id="my-teams-btn" onClick={props.myTeams}>My Teams</button>
            <button className="nav-btn" id="my-players-btn">My Players</button>
            <button className="nav-btn" id="contact-btn">contact & updates</button>
        </nav>
    )
}