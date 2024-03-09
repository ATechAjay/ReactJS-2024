// import ReactDOM from "react-dom/client";
// import React from "react";
// const reactElement = React.createElement("h1", {}, "Hello world");

// const rootElement = ReactDOM.createRoot(document.getElementById("root"));
// rootElement.render(reactElement);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
