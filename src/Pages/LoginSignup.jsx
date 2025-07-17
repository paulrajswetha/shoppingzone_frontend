import React from 'react'
import './CSS/LoginSignup.css'
import { useState } from 'react'

const LoginSignup = () => {

  const [state, setState] = useState("Login")
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })


  const ChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const login = async () => {
    console.log("Login Function Executed", formData)
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json(); // ✅ Parse the response correctly
      console.log("Response from server:", responseData);

      if (response.ok && responseData.success) {
        // ✅ Only if HTTP status is 200–299 *and* success is true
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert("Login : " + (responseData.errors || "You have signed up successfully"));
      }

    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed: " + error.message);
    }
  }

  const signup = async () => {
    console.log("Signup Function Executed", formData);

    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json(); // ✅ Parse the response correctly
      console.log("Response from server:", responseData);

      if (response.ok && responseData.success) {
        // ✅ Only if HTTP status is 200–299 *and* success is true
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert("Signup : " + (responseData.errors || "You have signed up successfully"));
      }

    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed: " + error.message);
    }
  };



  return (
    <div className='LoginSignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input type="text" name="username" value={formData.username} onChange={ChangeHandler} placeholder='Your Name' /> : <></>}
          <input name="email" value={formData.email} onChange={ChangeHandler} type="email" placeholder='Your email' />
          <input name="password" value={formData.password} onChange={ChangeHandler} type="password" placeholder='password' />

        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "Sign Up"
          ? <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Log In</span></p>
          : <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click here</span></p>}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing ,I agree to the terms of use & privacy policy </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup