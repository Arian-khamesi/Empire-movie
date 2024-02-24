import React from 'react'
import "./SliderTitle.css"
import { Link } from 'react-router-dom'

export default function SliderTitle({ title, btn, margin, href }) {
  return (
    <div className={margin ? "slider-title-container addMargin" : "slider-title-container"}>
      <h2 className='slider-title'>{title}</h2>
      {btn ? <Link to={`/show-all/${href}/1`}><button className='slider-all'>See All</button></Link> : null}
    </div>
  )
}
