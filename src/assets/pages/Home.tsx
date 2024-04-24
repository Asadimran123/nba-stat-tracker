// @ts-ignore
import React from "react"
// @ts-ignore
import  {Route, Routes} from "react-router-dom"
import "../../App.css"
import "../esp/esp_bdit.ttf"

export default function Home(){
    return(
        <div className="home">
            <h1 className="home-header">Welcome!</h1>
            <p className="home-p"> Check out your favorite NBA teams  and players</p>
            <h3 className="home-header">Future plans</h3>
            <p className="home-p"> Mobile view optimization</p>
            <p className="home-p"> Favorite Players</p>
            <p className="home-p"> Live game scores</p>
            <p className="home-p"> Fantasy predictions</p>
        </div>
    )
}