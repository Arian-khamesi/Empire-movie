import React from 'react'
import "./Register.css"
import Topbar from "./../../Component/Header/Topbar"

export default function Register() {
  return (
    <div className="register-container">
      <div className="gray"></div>
      <Topbar/>
      <div className="register-form">
        <label htmlFor="signIn" className='form-label'>Sign In</label>
        <form action="signIn" className='signin-form'>
          <input className='register-input' type="text" placeholder='Full Name' />
          <input className='register-input' type="text" placeholder='UserName' />
          <input className='register-input' type="text" placeholder='Email' />
          <input className='register-input' type="number" placeholder='Age'  min={8} max={150}/>
          <input className='register-input' type="password" placeholder='Password' />
          <input className='register-input' type="password" placeholder='Confirm Password' />
          <button className="register-user">Sign Up</button>
        </form>
      </div>
    </div>
  )
}
