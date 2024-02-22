import React from 'react'
import "./UserPanel.css"
import Topbar from "./../../Component/Header/Topbar"
import { Link } from 'react-router-dom'
import MovieBox from '../../Component/SliderBox/MovieBox'
import SliderTitle from '../../Component/SliderTitle/SliderTitle'

export default function UserPanel() {
  return (
    <div className="user-panel-container">
      <div className="gray-userpanel"></div>
      <Topbar />
      <div className="account-panel">
        <img src="/images/users/user-1.jpg" alt=""  className='user-Photo'/>
        <div className="user-panel-form">
          <form action="" className='account-form'>
            <input className='user-panel-input' type="text" placeholder='Full Name' />
            <input className='user-panel-input' type="text" placeholder='UserName' />
            <input className='user-panel-input' type="text" placeholder='Email' />
            <input className='user-panel-input' type="number" placeholder='Age' min={8} max={150} />
            <input className='user-panel-input' type="password" placeholder='Password' />
            <input className='user-panel-input' type="password" placeholder='Confirm Password' />
            <button className="user-panel-user">Sign Up</button>
          </form>
        </div>
      </div>
      <div className="playlist">
        <div className='play-list-form-container'>
          <form action="" className="play-list-form">
            <input className='play-list-input' type="text" placeholder='Movie Name' />
            <input className='play-list-input' type="text" placeholder='Time' />
            <input className='play-list-input' type="date" placeholder='Date' />
            <input className='play-list-input' type="text" placeholder='Overview' min={8} max={150} />
            <input className='play-list-input' type="range" placeholder='IMDB Score' />
            <input className='play-list-input' type="file" placeholder='Poster' />
            <button className="play-list-user">Add To Own List</button>
          </form>
        </div>
      </div>
      <div className='space'>
        <div className='grad1'></div>
        <div className='grad2'></div>
      </div>
      <SliderTitle
        title={"Your List"}
        btn={false}
        margin={false}
      />
      <div className="slider-form-vert">
        <Link className='router-link' to={"/movie-info/movieName"}><MovieBox poster={"horiz"} /></Link>
        <Link className='router-link' to={"/movie-info/movieName"}><MovieBox poster={"horiz"} /></Link>
        <Link className='router-link' to={"/movie-info/movieName"}><MovieBox poster={"horiz"} /></Link>
      </div>
    </div>
  )
}
