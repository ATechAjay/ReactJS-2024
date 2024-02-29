import "./App.css";
import React from "react";
import Root from "./components/pages/Root";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/pages/Error";
import MainContaier from "./components/Main/MainContainer";
import RestaurantMenu from "./components/pages/RestaurantMenu";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <MainContaier /> },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        // Dynamic path
        path: "/restaurants/:restId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
