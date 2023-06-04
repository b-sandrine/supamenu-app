import "./sidebar.css";

const sidebar = () => {
  return (
    <div className="sidebar--container">
      <h3>1. Create your restaurant profile</h3>
      <div className="sample--elements">
        <div className="single--element">
          <div className="number">1</div>
          <div className="details">
            <h5>Restaurant Information</h5>
            <p>Restaurant name, address, Details, owner details</p>
          </div>
        </div>

        <div className="single--element">
          <div className="number">2</div>
          <div className="details">
            <h5>Restaurant Type & Timings</h5>
            <p>Establishment & cuisine type, opening hours</p>
          </div>
        </div>

        <div className="single--element">
          <div className="number">3</div>
          <div className="details">
            <h5>Create your menu</h5>
            <p>Menu, restaurant, food images </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
