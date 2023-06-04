import "./navbar.css";
import logo from "../../assets/SupaMenu3.png";
import RightNavbar from "./RightNavbar";

const navbar = () => {
  return (
    <div className="navbar--container">
      <div className="logo--container">
        <img src={logo} alt="App logo" />
      </div>
      <RightNavbar />
    </div>
  );
};

export default navbar;
