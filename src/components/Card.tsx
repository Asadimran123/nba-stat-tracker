import React from "react"
type CardProps = {
    name: string
}

export default function Card(props: CardProps){
    return (
        <div className="card">
            <h4>{props.name}</h4>
        </div>
    )
}