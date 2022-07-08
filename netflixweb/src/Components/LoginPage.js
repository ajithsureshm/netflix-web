import * as React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {useState, useContext} from 'react'
import {FirebaseContext} from '../store/FirebaseContext'


function LoginPage() {
  const navigate = useNavigate();


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {firebase} = useContext(FirebaseContext)


  const handleSubmit= (e) => {

    e.preventDefault()

    firebase.auth().signInWithEmailAndPassword(email,password)
     .then(()=>{
       alert('Logged In')
       
      navigate('/')
     }).catch((error) => {
       alert(error.message)
     })


  }

  return (
    <div className="login_page">
      
      <form className='form' onSubmit={handleSubmit} >

      <img width="200px" height="200px" src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' ></img>

      <div className='email' >
        <input type="email" name="" value={email}
            onChange={(e)=> setEmail(e.target.value)} id="email" placeholder='Gmail' />
      </div>

      <div className='password' >
        <input type="text" name="" value={password}
            onChange={(e)=> setPassword(e.target.value)} id="email" placeholder='Password' />
        </div>

        <button className= 'btn btn_login' style={{ cursor: "pointer" }} >Login</button>

        <div className='exit' >

        <button className='btn_login exit-btn' style={{ cursor: "pointer" }} onClick={() => {
            navigate('/')}} >Home</button>

        <button className='btn_login exit-btn ' style={{ cursor: "pointer" }} onClick={() => {
            navigate('/signIn')}} >Signup</button>

        </div>


      </form>
      
    </div>
  );
}

export default LoginPage;
