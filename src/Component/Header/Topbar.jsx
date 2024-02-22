import React from 'react'
import { Link } from 'react-router-dom'
import "./Topbar.css"

export default function Topbar({gradiant}) {

  return (
    <div className={gradiant?"topbar-container col-12":"topbar-container-normal col-12"}>
      <div className="topbar">
        <div className="topbar-left">
          <div className="logo">
            <Link to={"/"}><img src="/images/empire.png" alt="logo" className='logo-img'/></Link>
          </div>
          <div className="topbar-menu">
            <Link to={""} className='topbar-links'>Movies</Link>
            <Link to={""} className='topbar-links'>Series</Link>
            <Link to={""} className='topbar-links'>Pepole</Link>
            <Link to={""} className='topbar-links'>About Us</Link>
          </div>
        </div>
        <div className="topbar-right">
          <div className="topbar-btns">
            <Link to={"/register"}><button className='topbar-button'>signUp</button></Link>
            <Link to={"/login"}><button className='topbar-button'>signIn</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
