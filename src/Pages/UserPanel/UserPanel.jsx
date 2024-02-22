import React from 'react'
import "./UserPanel.css"
import Topbar from "./../../Component/Header/Topbar"

export default function UserPanel() {
  return (
    <div className="user-panel-container">
      <Topbar/>
      <div className="account-panel">
        <img src="" alt="" />
        <div className="user-panel-form">
        <form action="">
          <input className='user-panel-input' type="text" placeholder='Full Name' value={""}/>
          <input className='user-panel-input' type="text" placeholder='UserName' value={""}/>
          <input className='user-panel-input' type="text" placeholder='Email' value={""}/>
          <input className='user-panel-input' type="number" placeholder='Age' value={""} min={8} max={150}/>
          <input className='user-panel-input' type="password" placeholder='Password' value={""}/>
          <input className='user-panel-input' type="password" placeholder='Confirm Password' value={""}/>
          <button className="user-panel-user">Sign Up</button>
        </form>
      </div>
      </div>
      <div className="playlist">
      <div className="play-list-form">
        <form action="">
          <input className='play-list-input' type="text" placeholder='Movie Name' value={""}/>
          <input className='play-list-input' type="text" placeholder='Time' value={""}/>
          <input className='play-list-input' type="date" placeholder='Date' value={""}/>
          <input className='play-list-input' type="text" placeholder='Overview' value={""} min={8} max={150}/>
          <input className='play-list-input' type="range" placeholder='IMDB Score' value={""}/>
          <input className='play-list-input' type="image" placeholder='Poster' value={""}/>
          <button className="play-list-user">Add To Own List</button>
        </form>
      </div>
      </div>
    </div>
  )
}
