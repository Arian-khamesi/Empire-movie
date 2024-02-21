import React from 'react'
import { Link } from 'react-router-dom'
import "./Topbar.css"

export default function Topbar() {
  return (
    <div className="topbar-container col-12">
      <div className="topbar">
        <div className="topbar-left">
          <div className="logo">
            <img src="/images/empire.png" alt="logo" className='logo-img'/>
          </div>
          <div className="topbar-menu">
            <Link className='topbar-links'>Movies</Link>
            <Link className='topbar-links'>Series</Link>
            <Link className='topbar-links'>Pepole</Link>
            <Link className='topbar-links'>About Us</Link>
          </div>
        </div>
        <div className="topbar-right">
          <div className="topbar-btns">
            <button className='topbar-button'>signUp</button>
            <button className='topbar-button'>signIn</button>
          </div>
        </div>
      </div>
    </div>
  )
}
