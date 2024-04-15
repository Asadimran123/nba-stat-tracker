import React from "react"

export default function AboutPage(){
    return(
        <div className="about-container">
            <h1 className="my-teams-header">About</h1>
            <div className="home">
                <h3 className="about-p">
                    Hi! Thank you for visiting my NBA stat tracker. 
                </h3>
                <p className="about-p">
                    This is a little project I through together to learn the basics of ReactJS. 
                </p>
                <p className="about-p">
                    If you spot any bugs, issues, or if you have any reccomendations for updates or future features, please feel free to contact me!
                </p>
                <p className="about-p">
                    You can find my GitHub repository below
                </p>
                <a href="https://github.com/Asadimran123/nba-stat-tracker" target="_blank" rel="noopener noreferrer"> Client GitHub Repo</a>
                <a href="https://github.com/Asadimran123/nba-stat-server" target="_blank" rel="noopener noreferrer"> Server GitHub Repo</a>
                <p className="about-p">
                    Happy Tracking!
                </p>
            </div>
        </div>
    )
}