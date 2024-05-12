import React, { useState, useContext, useEffect } from 'react'
import "./Register.css"
import Topbar from "./../../Component/Header/Topbar"
import Input from '../../Component/Input/Input'
import { requiredValidator, minValidator, maxValidator, emailValidator, phoneValidator } from '../../Validation/rules'
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { UserListContext } from '../../Contexts/UserListContext'
import Footer from '../../Component/Footer/Footer'


export default function Register() {

  const users = useContext(UserListContext)
  const [userAge, setUserAge] = useState(8)
  const navigate = useNavigate()


  const [formState, onInputHandler] = useForm({
    fullname: {
      value: "",
      isValid: false
    },
    username: {
      value: "",
      isValid: false
    },
    email: {
      value: "",
      isValid: false
    },
    password: {
      value: "",
      isValid: false
    },
    confirmPassword: {
      value: "",
      isValid: false
    },
  }, false)
  const registerUserHandler = (event) => {
    event.preventDefault()
    console.log('user register');

    const newUserInfo = {
      id: users.length + 1,
      name: formState.inputs.fullname.value,
      username: formState.inputs.username.value,
      age: userAge,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.confirmPassword.value,
    }
    users.push(newUserInfo)
    localStorage.setItem("logged in", newUserInfo.id)
    console.log(users);
    navigate(`/${newUserInfo.id}`)
  };

  return (
    <div className="register-container">
      <div className="gray-register"></div>
      <Topbar gradiant={true} />
      <div className="register-form">
        <label htmlFor="signIn" className='form-label'>Sign Up</label>
        <form action="signIn" className='signin-form'>
          <Input className='register-input' type="text" placeholder='Full Name' id="fullname"
            validations={[
              requiredValidator(),
              minValidator(8),
              maxValidator(20),
              // emailValidator()
            ]}
            onInputHandler={onInputHandler} />
          <Input className='register-input' type="text" placeholder='UserName' id="username"
            validations={[
              requiredValidator(),
              minValidator(8),
              maxValidator(20),
              // emailValidator()
            ]}
            onInputHandler={onInputHandler} />
          <Input className='register-input' type="text" placeholder='Email' id="email"
            validations={[
              requiredValidator(),
              minValidator(8),
              maxValidator(40),
              emailValidator()
            ]}
            onInputHandler={onInputHandler} />
          <input className='register-input' type="number" placeholder='Age' min={8} max={150} value={userAge} onChange={(event) => setUserAge(event.target.value)} />
          <Input className='register-input' type="password" placeholder='Password' id="password"
            validations={[
              requiredValidator(),
              minValidator(8),
              maxValidator(20),
              // emailValidator()
            ]}
            onInputHandler={onInputHandler} />
          <Input className='register-input' type="password" placeholder='Confirm Password' id="confirmPassword"
            validations={[
              requiredValidator(),
              minValidator(8),
              maxValidator(20),
              // emailValidator()
            ]}
            onInputHandler={onInputHandler} />
          <button className={`register-user ${formState.isInputValid ? "success-sub" : "error-sub"}`} onClick={registerUserHandler}>Sign Up</button>
        </form>
      </div>
      <div className="top-footer"></div>
            <Footer/>
    </div>
  )
}
