import RestaurantCard from "./Card";
const Body = () => {
  return (
    <div className="body">
      <div className="searchContainer">Search</div>

      <div className="restaurantContainer">
        <RestaurantCard foodName="Biryani" />
        <RestaurantCard foodName="Biryaniwala" />
        <RestaurantCard foodName="PaniWala" />
        <RestaurantCard foodName="PooriWala" />
      </div>
    </div>
  );
};

export default Body;
