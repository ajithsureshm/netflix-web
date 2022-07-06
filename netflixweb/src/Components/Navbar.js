
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const [show, setShow] = useState(false)

    const navigate = useNavigate();



    useEffect(() => {
      window.addEventListener('scroll',() =>{
          if (window.scrollY >100 ) {
              setShow(true)
          }else setShow(false)
          
      })

      return () => {
          window.removeEventListener('scroll',()=>{})
      }
    }, [])
    

  return (
    <div className={`nav ${show && 'nav-black'}`} >
        <img onClick={() => {
            navigate('/')}}
        className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
        alt='Netflix-logo' />


        <div className='one'>

         <a onClick={() => {
            navigate('/trending')}} >TRENDING</a>

         <a onClick={() => {
            navigate('/topRated')}} >TOPRATED</a>

         <a onClick={() => {
            navigate('/action')}} >ACTION</a>

         <a onClick={() => {
            navigate('/comedy')}} >COMEDY</a>

         <a onClick={() => {
            navigate('/horror')}} >HORROR</a>


         <a onClick={() => {
            navigate('/romance')}} >ROMANCE</a>

         <a onClick={() => {
            navigate('/documentry')}} >DECUMENTRY</a>


         </div>

        <img className='login'  onClick={() => {
            navigate('/login')}} className='nav_avatar' 
        src="https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png" 
         />
    </div>
  )
}

export default Navbar