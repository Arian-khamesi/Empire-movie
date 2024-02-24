import React from 'react'
import "./Celebriti.css"

export default function Celebriti({name,img}) {
  return (
    <div className="CelebContainer">
        <img src={img} alt="actor" className='actor-img'/>
        <span className='actor-name'>{name}</span>
    </div>
  )
}

