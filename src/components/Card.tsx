import React from "react"
type CardProps = {
    name: string
    key: number
    image: string
}

export default function Card(props: CardProps){
    return (
        <div className="card">
            <h3 className="card-header">{props.name}</h3>
            <img className='card-logo' src={props.image} alt={`${props.name} logo`} />
        </div>
    )
}