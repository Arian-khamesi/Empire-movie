import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Topbar.css"
import { UserListContext } from '../../Contexts/UserListContext'

export default function Topbar({ gradiant }) {

  const [mainUser, setMainUser] = useState({})
  const [listUser, setListUser] = useState([])
  const users = useContext(UserListContext)


  useEffect(() => {
    
    setMainUser(users.find(user => user.id == localStorage.getItem("logged in")))
    console.log(mainUser);

  }, [])


  return (
    <div className={gradiant ? "topbar-container col-12" : "topbar-container-normal col-12"}>
      <div className="topbar">
        <div className="topbar-left">
          <div className="logo">
            <Link to={`/`}><img src="/images/empire.png" alt="logo" className='logo-img' /></Link>
          </div>
          <div className="topbar-menu">
            <Link to={"/show-all/movies/1"} className='topbar-links'>Movies</Link>
            <Link to={"/show-all/series/1"} className='topbar-links'>Series</Link>
            <Link to={"/show-all/actors/1"} className='topbar-links'>Actors</Link>
            <Link to={""} className='topbar-links'>About Us</Link>
          </div>
        </div>
        <div className="topbar-right">
          <div className="topbar-btns">
            {
              mainUser ? <Link to={"/user-panel"}  className='topbar-button'>{mainUser.name}</Link> : (
                <>
                  <Link to={"/login"} className='topbar-button'>Sign In</Link>
                  <Link to={"/register"} className='topbar-button'>Sign Up</Link>
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
