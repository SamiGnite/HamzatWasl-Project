import React from 'react'
import './card.css'

export default function card(props) {

    const  { handleIcon , handleTitle, handleDescription } = props
  return (
    <div className="card-shape">
      <div className="card-icon">{handleIcon}</div>

      <div className="card-info">
        <h3>{handleTitle}</h3>
        <span>
          {handleDescription}
        </span>
      </div>
    </div>
  );
}
