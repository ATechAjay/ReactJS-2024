import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toogleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="h-screen w-screen container text-white">
      <Header />
      <form className="p-10 rounded-md bg-gren-500 flex flex-col w-96 gap-4 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-white font-bold pt-2 pb-2 text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInForm && (
          <div className="flex flex-col gap-2">
            <label className="text-white">Name:</label>
            <input
              className="p-2 outline-none shadow bg-gray-700 text-white rounded-md	"
              type="text"
              placeholder="Enter your name"
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label className="text-white">Email:</label>
          <input
            className="p-2 outline-none shadow bg-gray-700 text-white rounded-md	"
            type="text"
            placeholder="Email or phone number"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white">Password:</label>
          <input
            className="p-2 outline-none shadow bg-gray-700 text-white rounded-md	"
            type="password"
            placeholder=" Enter password"
          />
        </div>
        <button className="mt-5 transition-all	 bg-[#c11119] hover:bg-red-700 text-white p-2 rounded-md font-bold text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="pt-2">
          {isSignInForm ? "New to Netflix? " : "Already a user? "}

          <button
            className="text-red-500 hover:underline bg-none border-none  cursor-pointer"
            onClick={toogleSignInForm}
          >
            {isSignInForm ? "Sign up now." : "Sign in now. "}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
