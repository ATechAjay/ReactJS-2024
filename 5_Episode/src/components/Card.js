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

export default RestaurantCard;
