/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import profile from "../../assets/profile.png";
import './navbar.css'

// eslint-disable-next-line @typescript-eslint/ban-types
const RightNavbar = (names: any) => {

  return (
    <div className="rightnavbar">
      <div className="icons">
        <FiSearch className="icon" />
        <IoMdNotifications className="icon" />
      </div>
      <div className="userProfile">
        <p>{names}</p>
        <img src={profile} alt="User profile" />
      </div>
    </div>
  );
};

export default RightNavbar;
