import React from "react"

export default function AboutPage(){
    return(
        <div className="about-container">
            <h1 className="my-teams-header">About/Contact</h1>
            <div className="home">
                <h3 className="about-p">
                    Hi! Thank you for visiting my NBA stat tracker. 
                </h3>
                <p className="about-p">
                    This is a little project I through together to learn the basics of ReactJS. 
                </p>
                <p className="about-p">
                    I am passionate about basketball and its always nice to be able to work on something you are passionate about
                </p>
                <p className="about-p">
                    If you spot any bugs, issues, or if you have any reccomendations for updates or future features, please feel free to contact me!
                </p>
                <p className="about-p">
                    You can find the GitHub repository, my email, and LinkedIn below
                </p>
                <p className="about-p">
                    Happy Tracking!
                </p>
            </div>
        </div>
    )
}