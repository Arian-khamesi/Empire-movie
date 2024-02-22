import React from 'react'
import "./Login.css"
import Topbar from "./../../Component/Header/Topbar"

export default function Login() {
  return (
    <div className="login-container">
      <Topbar/>
      <div className="login-form">
        <form action="">
          <input className='login-input' type="text" placeholder='UserName' value={""}/>
          <input className='login-input' type="password" placeholder='Password' value={""}/>
          <button className="login-user">Sign In</button>
        </form>
      </div>
    </div>
  )
}
