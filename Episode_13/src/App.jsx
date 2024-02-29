// import "./App.css";
import React, { lazy, Suspense } from "react";
import Root from "./components/pages/Root";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/pages/Error";
import MainContaier from "./components/Main/MainContainer";
import RestaurantMenu from "./components/pages/RestaurantMenu";
import Cart from "./components/pages/Cart";
// import Grorcery from "./components/pages/Grorcery";

const GroceryLazyLoad = lazy(() => import("./components/pages/Grorcery"));

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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <GroceryLazyLoad />
          </Suspense>
        ),
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
