import "./settingup.css";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Restaurantinfo1 from "../../components/RestaurantInformation/page1/restaurantinfo";
import Restaurantinfo2 from "../../components/RestaurantInformation/page2/restaurantinfo";
import Restaurantinfo3 from "../../components/RestaurantInformation/page3/restaurantinfo";

import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import { useState } from "react";

const settingup = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount ] = useState(1);

    const nextPage = () => {
        setCount(count +1 )
    }
    const prevPage = () => {
        setCount(count - 1)
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

export default settingup;
