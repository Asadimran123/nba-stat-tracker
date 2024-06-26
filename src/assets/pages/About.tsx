// @ts-ignore
import React from "react"

export default function AboutPage(){
    return(
        <div className="home">
            <h1 className="my-teams-header">About</h1>
            <div className="home">
                <h3 className="about-p">
                    Hi! Thank you for visiting my NBA stat tracker. 
                </h3>
                <p className="about-p">
                    This is a little project I threw together to learn the basics of web application development. 
                </p>
                <p className="about-p">
                    If you spot any bugs, issues, or if you have any reccomendations for updates or future features, please feel free to contact me!
                </p>
                <p className="about-p">
                    You can find my GitHub repositories for the client app and server below
                </p>
                <p className="about-p">
                    Happy Tracking!
                </p>
                <h3 className="about-p">Future Plans</h3>
                <p className="about-p">Favorite Players</p>
                <p className="about-p">Favorite Team Filters</p>
                <p className="about-p">Live Game Scores</p>
                <p className="about-p">Detailed team data</p>
                <a href="https://github.com/Asadimran123/nba-stat-tracker" target="_blank" rel="noopener noreferrer"> Client GitHub Repo</a>
                <a href="https://github.com/Asadimran123/nba-stat-server" target="_blank" rel="noopener noreferrer"> Server GitHub Repo</a>
            </div>
        </div>
    )
}