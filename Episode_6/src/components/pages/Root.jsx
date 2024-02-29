import Header from "../Header/Header";
import React from "react";

import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
