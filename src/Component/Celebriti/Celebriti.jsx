import React from 'react'
import "./Celebriti.css"
import { Link } from 'react-router-dom'

export default function Celebriti({id,name,img}) {
  return (
    <Link className='router-link' to={`/cast/${id}`}>
    <div className="CelebContainer">
        <img src={img} alt="actor" className='actor-img'/>
        <span className='actor-name'>{name}</span>
    </div>
    </Link>
  )
}

