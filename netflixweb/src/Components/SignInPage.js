import React, { useState, useContext } from "react";
import "./SignIn.css";
import { useNavigate, Link } from "react-router-dom";
import { FirebaseContext } from '../store/FirebaseContext';



function SignInPage() {
  
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const {firebase} = useContext(FirebaseContext)

  const handleSubmit =(e)=>{
    e.preventDefault()

    console.log(firebase);

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((result)=>{
      result.user.updateProfile({displayName:username})
      .then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        })
         
        navigate('/login');
        
      })
    })
  }

  return (
    <div>
      <div className="login_page">
        <form className="signinform" onSubmit={handleSubmit} >
          <img
            width="200px"
            height="200px"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          ></img>

          <div className="password">
            <input
              type="text"
              name=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="email"
              placeholder="Name"
            />
          </div>

          <div className="email">
            <input
              type="email"
              name=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Gmail"
            />
          </div>

          <div className="password">
            <input
              type="text"
              name=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="email"
              placeholder="Password"
            />
          </div>

          <div className="password">
            <input
              type="number"
              name=""
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="email"
              placeholder="Phone"
            />
          </div>

          <button className="btn btn_login" style={{ cursor: "pointer" }}  >
            SignIn
          </button>

          <div className="exit">
            <button
              className="btn_login exit-btn"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </button>

            <button
              className="btn_login exit-btn "
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
