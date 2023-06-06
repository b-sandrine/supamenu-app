import "./signup.css";
import logo from "../../assets/SupaMenu1.png";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from 'axios'

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onValueChange = (event: any) => {
    setUser({...user, [event.target.name ]: event.target.value})
  }

  const handleSubmit = () => {
    console.log(user);
    axios.post('http://localhost:2000/user/register', user)
    .then(res => { 
      console.log(res)
      navigate('/login')
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="signup--container">
      <div className="logo--container">
        <img src={logo} alt="App logo" />
      </div>
      <div className="form">
        <h3>Signup</h3>
        {/* <div className="form--component">
          <label>FIRST NAME</label>
          <input
            type="text"
            name="fname"
            id=""
            value={user.fname}
            onChange={onValueChange}
            placeholder="First name"
          />
        </div> */}
        <div className="form--component">
          <label>FULL NAME</label>
          <input
            type="text"
            name="fullName"
            id=""
            value={user.fullName}
            onChange={onValueChange}
            placeholder="Full name"
          />
        </div>
        <div className="form--component">
          <label>PHONE</label>
          <input
            type="text"
            name="phoneNumber"
            id=""
            value={user.phoneNumber}
            onChange={onValueChange}
            placeholder="Phone Number"
          />
        </div>
        <div className="form--component">
          <label>EMAIL</label>
          <input
            type="email"
            name="email"
            id=""
            value={user.email}
            onChange={onValueChange}
            placeholder="Email address"
          />
        </div>
        <div className="form--component">
          <label>PASSWORD</label>
          <input
            type="password"
            name="password"
            id=""
            value={user.password}
            onChange={onValueChange}
            placeholder="Password"
          />
        </div>
        <div className="form--component">
          <input
            type="submit"
            name=""
            id=""
            value="Sign Up"
            onClick={handleSubmit}
          />
        </div>
        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
