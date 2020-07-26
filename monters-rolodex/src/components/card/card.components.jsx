import React from 'react'
import './card.styles.css'

export const Card = (props) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monter.id}?set=set2&size=180x180`} alt="monter" />
            <h3>{props.monter.name}</h3>
            <p>{props.monter.email}</p>
        </div>
    )
}