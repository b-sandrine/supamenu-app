import "./restaurantinfo.css";

const restaurantinfo3 = () => {
  return (
    <div className="restuarantinfo--container">
      <div className="buttons">
        <button className="active">Drink</button>
        <button>Starter</button>
        <button>Appetizer</button>
        <button>Dessert</button>
        <button>Main</button>
      </div>
      <div className="form">
        <div className="form--component">
          <label>Name</label>
          <input type="text" name="" id="" placeholder="Menu Name" />
        </div>
        <div className="form--component">
          <label>Price</label>
          <input type="Number" name="" id="" placeholder="RWF" />
        </div>
        <div className="form--component">
          <label>Menu description</label>
          <input type="text" name="" id="" placeholder="Upload image" />
        </div>
        <div className="form--component">
          <label>Images</label>
          <input type="file" name="" id="" accept="image/*" />
        </div>
      </div>
    </div>
  );
};

export default restaurantinfo3;
