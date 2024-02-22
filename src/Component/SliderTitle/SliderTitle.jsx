import React from 'react'
import "./SliderTitle.css"

export default function SliderTitle({title,btn}) {
  return (
    <div className="slider-title-container">
        <h2 className='slider-title'>{title}</h2>
       {btn? <button className='slider-all'>See All</button>:null}
    </div>
  )
}
