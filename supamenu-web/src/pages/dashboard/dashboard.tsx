import "./dashboard.css";
import "../../components/navbar/navbar.css";

import Sidebar from "../../components/Sidebar/sidebar";
import RightNavbar from "../../components/navbar/RightNavbar";
import { MdOutlineHorizontalRule } from "react-icons/md";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dashboard = (token: any) => {
  console.log(token)
  return (
    <div className="dashboard--container">
      <Sidebar />
      <div className="content">
        <div className="heading">
          <div className="page--title">
            <h5>Overview</h5>
          </div>
          <RightNavbar />
        </div>
        <div className="orders">
          <div className="time">
            <h3>Orders</h3>
            <p>as of 25 May 2022, 09:41 PM</p>
          </div>
          <div className="overview">
            <div className="buttons">
              <button className="active">Active</button>
              <button>Paid</button>
              <button>Pending</button>
              <button>All</button>
            </div>
            <div className="orders--details">
              <div className="single--order">
                <div className="number">
                  <p>Order |1</p>
                </div>
                <div className="order--details">
                  <p>Kaffir Lime Vodka, Lemongrass, Ginger, Citrus</p>
                  <h3>Tom Yummy | x 2</h3>
                  <div className="table">
                    <MdOutlineHorizontalRule className="icon"/>
                    <h4>Table 1</h4>
                    <MdOutlineHorizontalRule className="icon"/>
                  </div>
                </div>
                <div className="pricings">
                    <h3>Frw 5,000</h3>
                    <div className="table">
                      <MdOutlineHorizontalRule className="icon"/>
                      <h4>Guest</h4>
                      <MdOutlineHorizontalRule className="icon"/>
                    </div>
                    <h4>0789190291</h4>
                  </div>
                <div className="more--info"></div>
              </div>

              <div className="single--order">
                <div className="number">
                  <p>Order |1</p>
                </div>
                <div className="order--details">
                  <p>Kaffir Lime Vodka, Lemongrass, Ginger, Citrus</p>
                  <h3>Tom Yummy | x 2</h3>
                  <div className="table">
                    <MdOutlineHorizontalRule className="icon"/>
                    <h4>Table 1</h4>
                    <MdOutlineHorizontalRule className="icon"/>
                  </div>
                </div>
                <div className="pricings">
                    <h3>Frw 5,000</h3>
                    <div className="table">
                      <MdOutlineHorizontalRule className="icon"/>
                      <h4>Guest</h4>
                      <MdOutlineHorizontalRule className="icon"/>
                    </div>
                    <h4>0789190291</h4>
                  </div>
                <div className="more--info"></div>
              </div>

              <div className="single--order">
                <div className="number">
                  <p>Order |1</p>
                </div>
                <div className="order--details">
                  <p>Kaffir Lime Vodka, Lemongrass, Ginger, Citrus</p>
                  <h3>Tom Yummy | x 2</h3>
                  <div className="table">
                    <MdOutlineHorizontalRule className="icon"/>
                    <h4>Table 1</h4>
                    <MdOutlineHorizontalRule className="icon"/>
                  </div>
                </div>
                <div className="pricings">
                    <h3>Frw 5,000</h3>
                    <div className="table">
                      <MdOutlineHorizontalRule className="icon"/>
                      <h4>Guest</h4>
                      <MdOutlineHorizontalRule className="icon"/>
                    </div>
                    <h4>0789190291</h4>
                  </div>
                <div className="more--info"></div>
              </div>
            </div>
          </div>
          <div className="more--info">
            <div className="single--item">
              <h4>Pending orders</h4>
              <p>6</p>
            </div>
            <div className="single--item">
              <h4>Occupied Tables</h4>
              <p>12</p>
            </div>
            <div className="single--item">
              <h4>Order/hour</h4>
              <p>40</p>
            </div>
            <div className="single--item">
              <h4>Seats</h4>
              <p>30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
