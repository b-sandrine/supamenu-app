import "./restaurantinfo.css";
const restaurantinfo2 = () => {
  return (
    <div className="restuarantinfo--container">
      <div className="form">
        <div className="form--component">
          <label>Restaurant Type (restaurant, pub, hotel, coffeeshop, other)</label>
          <input type="text" name="" id="" placeholder="Restaurant" />
          <input
            type="text"
            name=""
            id=""
            placeholder="African"
          />
        </div>
        <div className="form--component">
          <label>Opening Hours</label>
          <div className="flex">
          <input type="text" name="" id="" placeholder="From" style={{marginRight: '5%'}} />
            <input
              type="text"
              name=""
              id=""
              placeholder="To"
              style={{marginLeft: '5%'}} 
            />
          </div>
        </div>

        <div className="form--component">
          <label>Upload Images (pictures or logo)</label>
          <input type="file" name="" id=""  accept="image/*" />
        </div>
      </div>
    </div>
  );
};

export default restaurantinfo2;
