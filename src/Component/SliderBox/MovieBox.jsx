import React from 'react'
import "./MovieBox.css"

export default function MovieBox({poster}) {
  return (
    <div className={poster==="horiz"?"horiz-movie-box":"vert-movie-box"}>
        <div className={poster==="horiz"?"horiz-cover-movie-box":"vert-cover-movie-box"}>
            <img src={poster==="horiz"?"/images/land-of-bad.png":"/images/house-of-dragon.jpg"} alt="" className={poster==="horiz"?"horiz-img-movie-box":"vert-img-movie-box"} />
            <div className={poster==="horiz"?"horiz-movie-score":"vert-movie-score"}>8</div>
        </div>
        <span className={poster==="horiz"?"horiz-title-movie-box":"vert-title-movie-box"}>{poster==="horiz"?"Land Of Bad":"House Of Dragon"}</span>
    </div>
  )
}
