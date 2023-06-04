import "./welcome.css";
import logo from "../../assets/SupaMenu2.png";
import user from "../../assets/Registration.png";
import food from "../../assets/Food.png";
import orderhistory from '../../assets/Order History.png'
import { useNavigate } from "react-router";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome--container">
      <div className="header">
        <img src={logo} alt="App logo 1" />
        <div className="header--content">
          <h1>Register your restaurant on SupaMenu</h1>
          <p>for free and get more revenue</p>
          <button onClick={()=>navigate('/signup')}>Register your Restaurant</button>
          <button onClick={()=>navigate('/login')}>Restaurant already registered? Sign In</button>
        </div>
      </div>
      <div className="details">
        <h3>How it works</h3>
        <div className="items">
          <div className="single--item">
            <img src={user} alt="user registration" />
            <h3>Step 1</h3>
            <p>Register your restaurant</p>
          </div>
          <div className="single--item">
            <img src={food} alt="user registration" />
            <h3>Step 2</h3>
            <p>Create your restaurant profile and create menu items</p>
          </div>
          <div className="single--item">
            <img src={orderhistory} alt="user registration" />
            <h3>Step 3</h3>
            <p>Start receiving orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
