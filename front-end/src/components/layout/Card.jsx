import './Card.css'
import React from 'react'

export default props => {

    const cardStyle = {
        backgroundColor: props.color || "#b9b4b4",
    }

    return (
        <div className="Card" >
            <div className="Title">
                <strong> <h4>{ props.Title }</h4> </strong>
            </div>
            <div className="Content" style={cardStyle}>
                { props.children }
            </div>
        </div>

    )
}