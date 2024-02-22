import React from 'react'
import "./Register.css"
import Topbar from "./../../Component/Header/Topbar"

export default function Register() {
  return (
    <div className="register-container">
      <Topbar/>
      <div className="register-form">
        <form action="">
          <input className='register-input' type="text" placeholder='Full Name' value={""}/>
          <input className='register-input' type="text" placeholder='UserName' value={""}/>
          <input className='register-input' type="text" placeholder='Email' value={""}/>
          <input className='register-input' type="number" placeholder='Age' value={""} min={8} max={150}/>
          <input className='register-input' type="password" placeholder='Password' value={""}/>
          <input className='register-input' type="password" placeholder='Confirm Password' value={""}/>
          <button className="register-user">Sign Up</button>
        </form>
      </div>
    </div>
  )
}
