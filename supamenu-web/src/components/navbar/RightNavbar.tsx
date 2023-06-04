import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import profile from "../../assets/profile.png";
import './navbar.css'

const RightNavbar = () => {
  return (
    <>
      <div className="icons">
        <FiSearch className="icon" />
        <IoMdNotifications className="icon" />
      </div>
      <div className="userProfile">
        <p>Jacques Kagabo</p>
        <img src={profile} alt="User profile" />
      </div>
    </>
  );
};

export default RightNavbar;
