/* eslint-disable @typescript-eslint/no-explicit-any */
import "./settingup.css";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar1/sidebar1";
import Restaurantinfo1 from "../../components/RestaurantInformation/page1/restaurantinfo";
import Restaurantinfo2 from "../../components/RestaurantInformation/page2/restaurantinfo";
import Restaurantinfo3 from "../../components/RestaurantInformation/page3/restaurantinfo";

import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Settingup = (token: any) => {
  const [userProfile, setUserProfile] = useState(null);

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

    useEffect(() => {
      const fetchUserProfile = async() => {
        try {
          const response = await fetch("http://localhost:2000/user/findUser", {
            method: "GET",
            headers: {
              authorization: `Bearer ${token.token}`,
            },
          });

          setTimeout(async ()=> {
            if(response.ok) {
              const data = await response.json();
              setUserProfile(data)
            }
            else {
              console.error('User not found')
            }
          },2000)
        }
        catch(err) {
          console.log("Error while fetching user profile", err)
        }
      }
      fetchUserProfile()
    },[token])
  return (
    <div className="settingup--container">
      <Navbar  userData = {userProfile}/>
      <Sidebar />

      {userProfile ? (
        <div>
          {count === 1 && <Restaurantinfo1/>}
          {count === 2 && <Restaurantinfo2 />}
          {count === 3 && <Restaurantinfo3 />}
        </div>
      ) : (
        <div><p>Loading profile ...</p></div>
      )}
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
