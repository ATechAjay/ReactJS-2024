import React from "react";
import ReactDOM from "react-dom/client";

// // Step 1: Create a react element
// const reactElement = React.createElement(
//   "h1",
//   { id: "titile" },
//   "This is the heading from React"
// );

// // console.log(reactElement);

// // Step 2: Create a root element
// const rootElement = ReactDOM.createRoot(document.querySelector(".root"));
// // console.log(rootElement);

// // Step 3: Render element on the web page.
// rootElement.render(reactElement);

// const jsxHeading = <h1>This is a JSX heading!....</h1>;

// Functional Component

// const Heading = () => {
//   return (
//     <>
//       <h1>This is a functional component.</h1>
//       {jsxHeading}
//     </>
//   );
// };

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// div with class “title”)

const reactNestedElement = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "This is h1"),
  React.createElement("h2", {}, "This is h2"),
  React.createElement("h3", {}, "This is h3"),
]);

const rootElement = ReactDOM.createRoot(document.querySelector(".root"));

// rootElement.render(Heading());
rootElement.render(reactNestedElement);
