

import Home from './Pages/Home'
import Trending from './Pages/Trending';
import TopRated from './Pages/TopRated'
import Action from './Pages/Action'
import Comedy from './Pages/Comedy'
import Horror from './Pages/Horror'
import Romance from './Pages/Romance'
import Documentry from './Pages/Documentry'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useEffect, useContext , Suspense, useState} from 'react';
import {AuthContext, FirebaseContext} from './store/FirebaseContext'

import Navbar from './Components/Navbar';
import Banner from './Components/Banner'
import Login from './Pages/Login'
import SignIn from './Pages/SignIn'
import RingLoader from "react-spinners/ClipLoader";



function App() {


  const {user,setUser} = useContext(AuthContext)

  const {firebase} = useContext(FirebaseContext)

  const [loading, setLoading] = useState(false)

  useEffect(() => {

    // console.log(user);

      firebase.auth().onAuthStateChanged((user) => {
      setUser(user)


      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 3000);
  });
    
  },[])
  
  
  return (


    <Router>

{ loading ? <RingLoader color={'#CF0A20'} loading={loading}  size={100} /> :  


    <div className="App" >
      

      {/* <Navbar/>

      <Banner/> */}


     <Routes>


       <Route path='/' exact element={<Home />} />

       <Route path='/trending' element={<Trending />} />

       <Route path='/topRated' element={<TopRated />} />

       <Route path='/action' element={<Action />} />

       <Route path='/comedy' element={<Comedy />} />

       <Route path='/horror' element={<Horror />} />

       <Route path='/romance' element={<Romance />} />

       <Route path='/documentry' element={<Documentry />} />

       <Route path='/login' element={<Login />} />
       
       <Route path='/signIn' element={<SignIn />} />

       

      
      </Routes>

    

    </div>}

    </Router>
    
    
  );
}

export default App;
