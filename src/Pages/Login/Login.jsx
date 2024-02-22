import React from 'react'
import "./Login.css"
import Topbar from "./../../Component/Header/Topbar"

export default function Login() {
  return (
    <div className="login-container">
      <div className="gray2"></div>
      <Topbar/>
      <div className="login-form">
      <label htmlFor="signIn" className='form-label'>Log In</label>
        <form action="signIn" className='signin-form'>
          <input className='login-input' type="text" placeholder='UserName'/>
          <input className='login-input' type="password" placeholder='Password'/>
          <button className="login-user">Log In</button>
        </form>
      </div>
    </div>
  )
}
