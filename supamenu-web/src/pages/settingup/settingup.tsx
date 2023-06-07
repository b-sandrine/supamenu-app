import "./settingup.css";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar1/sidebar1";
import Restaurantinfo1 from "../../components/RestaurantInformation/page1/restaurantinfo";
import Restaurantinfo2 from "../../components/RestaurantInformation/page2/restaurantinfo";
import Restaurantinfo3 from "../../components/RestaurantInformation/page3/restaurantinfo";

import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import { useState } from "react";
import { useNavigate } from "react-router";

const Settingup = (token: any) => {
    const navigate = useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount ] = useState(1);
    const nextPage = () => {
        setCount(count +1 )
        if(count + 1 > 3) {
            navigate('/dashboard')
        }
    }
    const prevPage = () => {
        setCount(count - 1)
        if(1-count < 1) {
            navigate('/login')
        }
    }
  return (
    <div className="settingup--container">
      <Navbar />
      <Sidebar />

      {count === 1 && <Restaurantinfo1 />}
      {count === 2 && <Restaurantinfo2 />}
      {count === 3 && <Restaurantinfo3 />}
      <div className="footer">
        <button className="left" onClick={prevPage}>
          <FaAngleLeft />
          <p>Back</p>
        </button>
        <button className="right" onClick={nextPage}>
          <p>Next</p>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Settingup;
