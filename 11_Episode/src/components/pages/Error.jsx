// import  from "./Error.module.css";
import React from "react";

// This hook provided by React route  dom library.
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className={"error-container"}>
      <h1>❌OOPS... Something Went Wrong❌</h1>
      <h2>{err.error.message}</h2>
      <h3>{err.status + " " + err.statusText} 😖</h3>
    </div>
  );
};

export default Error;
