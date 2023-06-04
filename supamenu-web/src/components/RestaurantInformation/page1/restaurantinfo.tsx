import "./restaurantinfo.css";
const restaurantinfo1 = () => {
  return (
    <div className="restuarantinfo--container">
      <div className="form">
        <div className="form--component">
          <label>Restaurant Information</label>
          <input type="text" name="" id="" placeholder="Restaurant Name" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Restaurant Complete Name"
          />
        </div>
        <div className="form--component">
          <label>Contact number @Restaurant</label>
          <input type="text" name="" id="" placeholder="Mobile number" />
        </div>

        <div className="form--component">
          <label>Restaurant owner details</label>
          <input type="text" name="" id="" placeholder="Mobile number" />
          <div className="flex">
            <input type="text" name="" id="" placeholder="Owner Name" style={{marginRight: '5%'}} />
            <input
              type="text"
              name=""
              id=""
              placeholder="Restaurant Owner Email"
              style={{marginLeft: '5%'}} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default restaurantinfo1;
