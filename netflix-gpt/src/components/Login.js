import React, { useRef, useState } from "react";
import Header from "./Header";
import validate from "./utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const clickHandler = (e) => {
    e.preventDefault();
    // Form validation
    const errMessage = validate(
      email?.current?.value,
      password?.current?.value,
      fullName?.current?.value
    );

    setErrMessage(errMessage);

    if (errMessage) return;
    // Sing in or sign up logic go from here.

    if (!isSignInForm) {
      // Sing up logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign in logic

      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toogleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="h-screen w-screen container text-white">
      <Header />
      <form className="p-10 rounded-md bg-gren-500 flex flex-col w-96 gap-4 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2">
        <h2 className="text-white font-bold pt-2 pb-2 text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInForm && (
          <div className="flex flex-col gap-2">
            <label className="text-white">Full name:</label>
            <input
              className="p-2 outline-none shadow bg-gray-700 text-white rounded-md	"
              type="text"
              placeholder="Enter your name"
              ref={fullName}
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label className="text-white">Email:</label>
          <input
            className="p-2 outline-none shadow bg-gray-700 text-white rounded-md	"
            type="text"
            placeholder="Email or phone number"
            ref={email}
            autoComplete="on"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white">Password:</label>
          <input
            className="p-2 outline-none shadow bg-gray-700 text-white rounded-md	"
            type="password"
            placeholder=" Enter password"
            ref={password}
            autoComplete="on"
          />
        </div>
        <p className="text-[#c11119] font-bold">{errMessage}</p>
        <button
          className=" transition-all	 bg-[#c11119] hover:bg-red-700 text-white p-2 rounded-md font-bold"
          onClick={clickHandler}
        >
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
