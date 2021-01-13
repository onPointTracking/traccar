import React from 'react'
import "./Login.css"
import axios from './Connector'
import {SESSION} from './APIS'
import qs from 'qs'


const signUpBtn = () => {
	document.querySelector(".container").classList.add("sign-up-mode");
}

const signInBtn = () => {
	document.querySelector(".container").classList.remove("sign-up-mode");
}

 const Login = () => {

   const [email,setEmail] = React.useState(""); 
   const [password,setPassword] = React.useState(""); 

   const handleLogin = (event) => {
    event.preventDefault();
    const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64')
    axios.post(SESSION ,
      "email=" + email +  "&password=" + password
     , {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded' ,
      }
    }).then(response => {
      console.log(response)
    })
   }
	return (
		<div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={handleLogin}>
			  <img src="https://i.ibb.co/hfNRxRg/logo.png" className="logo" alt="Logo"/>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email" value={email} onChange={(e) => {
                setEmail(e.target.value)
              }} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={password} onChange={(e) => {
                setPassword(e.target.value)
              }} />
            </div>
            <input type="submit" value="Login" className="btn solid"  />
		  
		  </form>
          <form className="sign-up-form">
		  <img src="https://i.ibb.co/hfNRxRg/logo.png" className="logo" alt="Logo"/>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up"  />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={signUpBtn}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={signInBtn}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
	)
}
export default Login
