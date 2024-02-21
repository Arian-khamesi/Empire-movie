import React from 'react'
import TopBar from "./Topbar"
import Landing from "./../Landing/Landing"
import "./Header.css"

export default function Header() {
  return (
    <div className='container-img'>
    <TopBar/>
    <Landing/>
    </div>
  )
}
