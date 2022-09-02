import React from 'react'
import './Card.css'

function Card({notes}) {
  const {title, body} = notes
  return (
    <div className='card'>
      <h4>{title}</h4>
      <p>{body}</p>
      <i class="fa-solid fa-trash"></i>
    </div>
  )
}

export default Card