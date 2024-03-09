import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const rootElement = ReactDOM.createRoot(document.querySelector(".root"));

// rootElement.render(Heading());
rootElement.render(<AppLayout />);
