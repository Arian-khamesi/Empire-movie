import React from 'react'
import "./MovieBox.css"
import { Link } from 'react-router-dom'

export default function MovieBox({ poster, name, score, img,id,series}) {
  return (
    <Link className='router-link' to={series?`/movie-info/series/${id}`:`/movie-info/movie/${id}`}>
      <div className={poster === "horiz" ? "horiz-movie-box" : "vert-movie-box"}>
        <div className={poster === "horiz" ? "horiz-cover-movie-box" : "vert-cover-movie-box"}>
          <img src={img} alt="" className={poster === "horiz" ? "horiz-img-movie-box" : "vert-img-movie-box"} />
          <div className={poster === "horiz" ? "horiz-movie-score" : "vert-movie-score"}>{score}</div>
        </div>
        <span className={poster === "horiz" ? "horiz-title-movie-box" : "vert-title-movie-box"}>{name}</span>
      </div>
    </Link>
  )
}
