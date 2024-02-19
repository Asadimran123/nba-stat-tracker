import React from "react"
type CardProps = {
    name: string
    key: number
    image: string
    wins: number
    loses: number
    rank: number
    games_behind: string
    conference: string
}

export default function Card(props: CardProps){
    return (
        <div className="card">
            {/* <h3 className="card-header">{props.name}</h3> */}
            <img className='card-logo' src={props.image} alt={`${props.name} logo`} />
            <div className="team-stats-div">
                <h4 className="team-stats-info">conference: {props.conference}</h4>
                <h4 className="team-stats-info">wins: {props.wins}</h4>
                <h4 className="team-stats-info">loses: {props.loses}</h4>
                <h4 className="team-stats-info">rank: {props.rank}</h4>
                <h4 className="team-stats-info">games behind: {props.games_behind}</h4>
            </div>
        </div>
    )
}