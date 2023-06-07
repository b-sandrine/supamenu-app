/* eslint-disable @typescript-eslint/no-explicit-any */
import "./navbar.css";
import logo from "../../assets/SupaMenu3.png";
import RightNavbar from "./RightNavbar";

const navbar = (userData: any) => {
  return (
    <div className="navbar--container">
      <div className="logo--container">
        <img src={logo} alt="App logo" />
      </div>
      <RightNavbar userData = {userData}/>
    </div>
  );
};

export default navbar;
