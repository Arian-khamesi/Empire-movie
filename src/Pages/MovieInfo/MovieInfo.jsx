import React from 'react'
import "./MovieInfo.css"
import Topbar from "./../../Component/Header/Topbar"
import Footer from '../../Component/Footer/Footer'

export default function MovieInfo() {
  return (
    <div className="movie-info-container">
      <div className="gray-movie-info"></div>
      <div><Topbar gradiant={true}/></div>
      <div className="movie-info">
        <div className="movie-info-left">
          <img src="/images/land-of-bad.png" alt="" className="movie-info-poster" />
          <div className="movie-info-score"></div>
        </div>
        <div className="movie-info-right">
          <div className="movie-information">
            <span className='time-movie'></span>
            <span className='date-movie'></span>
            <span className='score-imdb-movie'></span>
          </div>
          <div className="movie-description">
            <h1 className='movie-info-title'>Land Of Bad</h1>
            <p className='movie-info-desc'><span className='overview'>Overview :</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis nemo vitae beatae eius magnam minus blanditiis iure obcaecati et dolore! Adipisci qui voluptate corrupti sapiente laborum rerum recusandae quia. Quis.
            Voluptatibus ipsam, explicabo magni aliquid tempora nostrum molestias ratione corrupti dolorum possimus quidem ipsa facere a quos omnis porro sit suscipit provident aliquam earum? Iure porro illo facilis odio quos!
            Asperiores eos nemo at beatae quam suscipit, fuga, cum soluta mollitia aut itaque, repudiandae deleniti debitis cumque repellendus doloremque vero quaerat magnam ipsum! Fugit suscipit blanditiis dicta mollitia enim ipsam!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
