import Header from "../Header/Header";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../../utils/UserContext";

const Root = () => {
  const [newUser, setNewUser] = useState();
  useEffect(() => {
    const user = {
      name: "Ajay Yadav",
    };

    setNewUser(user.name);
  }, []);

  // console.log(newUser);

  return (
    <UserContext.Provider value={{ user: newUser, setNewUser }}>
      <Header />
      <Outlet />
    </UserContext.Provider>
  );
};

export default Root;
