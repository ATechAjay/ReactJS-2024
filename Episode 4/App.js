import React from "react";
import ReactDOM from "react-dom/client";

// Structure of the page.
// Header
// - Logo
// - Nav Items

const Header = () => {
  return (
    <header className="header">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/007/615/729/small_2x/express-food-delivery-free-vector.jpg"
        alt="food express logo"
      />

      <ul className="headerContainer">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
      </ul>
    </header>
  );
};

// Body
// - Search
// - RestaurantContainer
// - RestaurantCard

const RestaurantCard = ({ foodName }) => {
  return (
    <div className="restaurantCard">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f594f4f63d3e00e93203f02d40e38d24"
        alt="food"
      />
      <div className="cardDetails">
        <h3>{foodName}</h3>
        <p>Biryaniwala</p>
        <p>3.5 stars</p>
        <p>32 minutes</p>
        <p>Patna</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="searchContainer">Search</div>

      <div className="restaurantContainer">
        <RestaurantCard foodName="Biryani" />
        <RestaurantCard foodName="Biryaniwala" />
      </div>
    </div>
  );
};
// Footer
// - Copyright
// - Links
// - Address
// - Content

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const rootElement = ReactDOM.createRoot(document.querySelector(".root"));

// rootElement.render(Heading());
rootElement.render(<AppLayout />);
