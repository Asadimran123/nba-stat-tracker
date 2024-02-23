import React from "react"
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
}

const heart_style = {
    fontSize: '35px'
}

export default function Card(props: CardProps){
    return (
        <div className="card">
            <img className='card-logo' src={props.image} alt={`${props.name} logo`} />
            <div className="team-stats-div">
                <h4 className="team-stats-info">conference: {props.conference}</h4>
                <h4 className="team-stats-info">wins: {props.wins}</h4>
                <h4 className="team-stats-info">loses: {props.loses}</h4>
                <h4 className="team-stats-info">rank: {props.rank}</h4>
                <button className="favorite-btn">
                    {props.isFavorite 
                    ? <span className="favorite-btn-icon" onClick={props.addFavorite} style={heart_style}>&#9829;</span>
                    : <span className="favorite-btn-icon" onClick={props.addFavorite}>&#9825;</span>
                }
                    </button>
            </div>
        </div>
    )
}