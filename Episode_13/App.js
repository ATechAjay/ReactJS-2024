// import "./App.css";
import React, { lazy, Suspense } from "react";
// import Root from "./components/pages/Root";
import Root from "./src/components/pages/Root";
import About from "./src/components/pages/About";
import Contact from "./src/components/pages/Contact";
import Blog from "./src/components/pages/Blog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./src/components/pages/Error";
import MainContaier from "./src/components/Main/MainContainer";
import RestaurantMenu from "./src/components/pages/RestaurantMenu";
import Cart from "./src/components/pages/Cart";
// import Grorcery from "./src/components/pages/Grorcery";

const GroceryLazyLoad = lazy(() => import("./src/components/pages/Grorcery"));
// const GroceryLazyLoad = lazy(() => import(".src/components/pages/Grorcery"));

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
