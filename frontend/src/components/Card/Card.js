import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card-container'>
        <div className='card-in'>
            <div className='card-title'>
                {props.item.title}
            </div>
            <div className='card-description'>
                {props.item.description}
            </div>
        </div>
    </div>
  )
}

export default Card