import React from 'react'
import "./Cast.css"
import Topbar from "./../../Component/Header/Topbar"
import Footer from '../../Component/Footer/Footer'

export default function Cast() {
  return (
    <div className="cast-container">
      <div className="gray"></div>
      <div><Topbar/></div>
      <div className="cast">
        <div className="cast-left">
          <img src="/images/land-of-bad.png" alt="" className="cast-poster" />
          <div className="cast-score"></div>
        </div>
        <div className="cast-right">
          <div className="castrmation">
            <span className='birthday-cast'></span>
            <span className='gender-cast'></span>
            <span className='role-cast'></span>
          </div>
          <div className="movie-description">
            <h1 className='cast-title'>Land Of Bad</h1>
            <p className='cast-desc'><span className='biography'>Biography :</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis nemo vitae beatae eius magnam minus blanditiis iure obcaecati et dolore! Adipisci qui voluptate corrupti sapiente laborum rerum recusandae quia. Quis.
            Voluptatibus ipsam, explicabo magni aliquid tempora nostrum molestias ratione corrupti dolorum possimus quidem ipsa facere a quos omnis porro sit suscipit provident aliquam earum? Iure porro illo facilis odio quos!
            Asperiores eos nemo at beatae quam suscipit, fuga, cum soluta mollitia aut itaque, repudiandae deleniti debitis cumque repellendus doloremque vero quaerat magnam ipsum! Fugit suscipit blanditiis dicta mollitia enim ipsam!</p>
          </div>
        </div>
      </div>
      <div className="cast-movie"></div>
    </div>
  )
}