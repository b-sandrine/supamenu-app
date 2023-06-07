/* eslint-disable @typescript-eslint/no-explicit-any */
import "./login.css";
import logo from "../../assets/SupaMenu1.png";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("") 

  const handleOnChange = (event: any) => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  const handleOnSubmit = () => {
    axios.post('http://localhost:2000/user/login', user)
    .then(res => { 
      console.log(res)
      navigate('/setting-up')
    })
    .catch(err => {
      console.log(err.message)
      setError("Invalid email or password")
    })
  }

  return (
    <div className="login--container">
      <div className="logo--container">
        <img src={logo} alt="App logo" />
      </div>
      <div className="form">
        <p style={{fontWeight: 700}}>Welcome</p>
        <h3>Login to SupaMenu</h3>
        <p style={{marginBottom: '30px'}}>Enter your email and password below</p>
       <div className="form--component">
          <label>EMAIL</label>
          <input 
            type="email" 
            name="email" 
            id="" 
            value={user.email}
            onChange={handleOnChange}
            placeholder="Email address" />
        </div>
        <div className="form--component">
          <label>PASSWORD</label>
          <input
            type="password" 
            name="password" 
            id="" 
            value={user.password}
            onChange={handleOnChange}
            placeholder="Password" />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="form--component">
          <input type="submit" name="" id="" value="Log In" onClick={handleOnSubmit}/>
        </div>
        <p>
          Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span>
        </p>
        <p>
          Forgot your password? <span>RESET</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
