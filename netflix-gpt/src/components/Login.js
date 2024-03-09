import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="h-screen w-screen">
      <Header />

      <div>
        <img
          className="h-screen w-screen "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="netflix imgae"
        />
      </div>

      <form className="p-12 bg-red">
        <input type="text" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button className="">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
