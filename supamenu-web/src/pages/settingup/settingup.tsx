import "./settingup.css";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Restaurantinfo from "../../components/RestaurantInformation/restaurantinfo";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

const settingup = () => {
  return (
    <div className="settingup--container">
      <Navbar />
      <Sidebar />
      <Restaurantinfo />
      <div className="footer">
        <button className="left">
          <FaAngleLeft />
          <p>Back</p>
        </button>
        <button className="right">
          <p>Next</p>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default settingup;
