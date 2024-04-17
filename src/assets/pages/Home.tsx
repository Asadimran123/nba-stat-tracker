// @ts-ignore
import React from "react"
// @ts-ignore
import  {Route, Routes} from "react-router-dom"

export default function Home(){
    return(
        <div className="home">
            <h1 className="home-header">Welcome!</h1>
            <p className="home-p"> Check out your favorite NBA teams using this NBA stat tracker</p>
            <h3 className="home-header">Future plans</h3>
            <p className="home-p"> Configure deployment to load logo and fonts for header</p>
            <p className="home-p"> Mobile view optimization</p>
            <p className="home-p"> Player search and favorite functionality</p>
            <p className="home-p"> Live game scores</p>
            <p className="home-p"> Fantasy predictions</p>
        </div>
    )
}