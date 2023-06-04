import "./login.css";
import logo from "../../assets/SupaMenu1.png";
import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
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
          <input type="email" name="" id="" placeholder="Email address" />
        </div>
        <div className="form--component">
          <label>PASSWORD</label>
          <input type="password" name="" id="" placeholder="Password" />
        </div>
        <div className="form--component">
          <input type="submit" name="" id="" value="Log In" onClick={() => navigate('/setting-up')}/>
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
