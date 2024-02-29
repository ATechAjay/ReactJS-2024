// import  from "./Error.module.css";
import React from "react";

// This hook provided by React route  dom library.
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className={"text-center my-5"}>
      <h1 className="font-bold text-lg mb-3">
        ❌OOPS... Something Went Wrong❌
      </h1>
      <h2 className="mb-2">{err.error.message}</h2>
      <h3>{err.status + " " + err.statusText} 😖</h3>
    </div>
  );
};

export default Error;
