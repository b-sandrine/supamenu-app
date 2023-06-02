import "./signup.css";
import logo from "../../assets/SupaMenu1.png";
const Signup = () => {
  return (
    <div className="signup--container">
      <div className="logo--container">
        <img src={logo} alt="App logo" />
      </div>
      <div className="form">
        <h3>Signup</h3>
        <div className="form--component">
          <label>FIRST NAME</label>
          <input type="text" name="" id="" placeholder="First name" />
        </div>
        <div className="form--component">
          <label>LAST NAME</label>
          <input type="text" name="" id="" placeholder="Last name" />
        </div>
        <div className="form--component">
          <label>PHONE</label>
          <input type="number" name="" id="" placeholder="" />
        </div>
        <div className="form--component">
          <label>EMAIL</label>
          <input type="email" name="" id="" placeholder="Email address" />
        </div>
        <div className="form--component">
          <label>PASSWORD</label>
          <input type="password" name="" id="" placeholder="Password" />
        </div>
        <div className="form--component">
          <input type="submit" name="" id="" value="Sign Up" />
        </div>
        <p>
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
