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

export default Header;
