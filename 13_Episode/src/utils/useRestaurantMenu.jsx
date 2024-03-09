import { useState, useEffect } from "react";
import { MENU_API } from "./Constant";

const useRestaurantMenu = (restId) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restId);
    const json = await data.json();
    setMenu(json.data.cards);
  };

  return menu;
};

export default useRestaurantMenu;
