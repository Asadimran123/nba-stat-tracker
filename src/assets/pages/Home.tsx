import React from "react"
import  {Route, Routes} from "react-router-dom"

export default function Home(){
    return(
        <div className="home">
            <h1 className="home-header">Welcome!</h1>
            <p className="home-p"> Check out your favorite NBA teams using this NBA stat tracker</p>
            <p className="home-p"> Click on the heart to save your favorite teams for the next time you want an update on them</p>
            <h3 className="home-header">Updates</h3>
            <p className="home-p"> As of now, the data available from API-sports.io reaches as far back as to the 2018-2019 season</p>
            <p className="home-p"> I recently refactored the entire site to use routing between pages instead of conditionally rendering components to a single page</p>
            <h3 className="home-header">Future plans</h3>
            <p className="home-p"> Player search and favorite functionality</p>
            <p className="home-p"> Live game scores</p>
            <p className="home-p"> Fantasy predictions</p>
        </div>
    )
}