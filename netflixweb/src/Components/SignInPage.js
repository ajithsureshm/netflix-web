
import React from 'react'
import './SignIn.css'
import { useNavigate } from "react-router-dom";


function SignInPage() {

    const navigate = useNavigate();


  return (
    <div>
        <div className="login_page">
      
      <form className='form' >

      <img width="200px" height="200px" src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' ></img>

      <div className='password' >
        <input type="text" name="" id="email" placeholder='Name' />
        </div>

      <div className='email' >
        <input type="email" name="" id="email" placeholder='Gmail' />
      </div>
      <div className='password' >
        <input type="text" name="" id="email" placeholder='Password' />
        </div>

        

        <div className='password' >
        <input type="number" name="" id="email" placeholder='Phone' />
        </div>

        <button className= 'btn btn_login' >SignIn</button>

        <div className='exit' >

        <button className='btn_login exit-btn' onClick={() => {
            navigate('/')}} >Home</button>

        <button className='btn_login exit-btn ' onClick={() => {
            navigate('/login')}} >Login</button>

        </div>


      </form>
      
    </div>
    </div>
  )
}

export default SignInPage