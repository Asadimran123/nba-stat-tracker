// @ts-ignore
import React from "react"

import clear_heart from "../assets/clear_heart.svg"
import colored_heart from "../assets/colored heart.svg"

type CardProps = {
    name: string
    key: number
    image: string
    wins: number
    loses: number
    rank: number
    conference: string
    isFavorite: boolean
    addFavorite: ()=> void
    season: string
}

const heart_style = {
    fontSize: '2px'
}

//&#9829;
//&#9825;
export default function Card(props: CardProps){
    return (
        <div className="card">
            <img className='card-logo' src={props.image} alt={`${props.name} logo`} />
            <div className="team-stats-div">
                <h4 className="team-stats-info">conference: {props.conference}</h4>
                <h4 className="team-stats-info">wins: {props.wins}</h4>
                <h4 className="team-stats-info">loses: {props.loses}</h4>
                <h4 className="team-stats-info">rank: {props.rank}</h4>
                <h4 className="team-stats-info">{props.season}</h4>
                <button className="favorite-btn" onClick={props.addFavorite}>
                    {props.isFavorite 
                    ? <span className="favorite-btn-icon" style={heart_style}>
                        <img src={colored_heart} className="heart-icon"/>
                        </span>
                    : <span className="favorite-btn-icon">
                        <img src={clear_heart} className="heart-icon"/>
                        </span>
                }
                    </button>
            </div>
        </div>
    )
}