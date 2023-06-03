import "./navbar.css";
import logo from "../../assets/SupaMenu3.png";
import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import profile from "../../assets/profile.png";

const navbar = () => {
  return (
    <div className="navbar--container">
      <div className="logo--container">
        <img src={logo} alt="App logo" />
      </div>
      <div className="icons">
        <FiSearch className='icon' />
        <IoMdNotifications className='icon' />
      </div>
      <div className="userProfile">
        <p>Jacques Kagabo</p>
        <img src={profile} alt="User profile" />
      </div>
    </div>
  );
};

export default navbar;
