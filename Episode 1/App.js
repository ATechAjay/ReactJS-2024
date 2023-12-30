// Step 1: Create a react element
const reactElement = React.createElement(
  "h1",
  { id: "titile" },
  "This is the heading from React"
);

// console.log(reactElement);

// Step 2: Create a root element
const rootElement = ReactDOM.createRoot(document.querySelector(".root"));
console.log(rootElement);

// Step 3: Render element on the web page.
rootElement.render(reactElement);

// React element is an JS object.
// const reactElement = React.createElement(
//   "h1",
//   { id: "title" },
//   "Hello World, from React...!!!"
// );

// Step 2: Create a root element

// const rootElement = ReactDOM.createRoot(document.querySelector(".root"));

// Step 3: Render element on the web page.

// rootElement.render(reactElement);

/* <div class="parent">
  <div class="child">
    <h1>Nested HTML Elements</h1>
  </div>
</div>; */

// Step 1: Create React Elements

// const reactEle = React.createElement(
//   "div",
//   { className: "parent" },
//   React.createElement("div", { className: "child" }, [
//     React.createElement("h1", {}, "Nested HTML Elements 1"),
//     React.createElement("h1", {}, "Nested HTML Elements 2"),
//     React.createElement("h1", {}, "Nested HTML Elements 3"),
//     React.createElement("h1", {}, "Nested HTML Elements 4"),
//     React.createElement("h1", {}, "Nested HTML Elements 5"),
//     React.createElement("h1", {}, "Nested HTML Elements 6"),
//     React.createElement("h1", {}, "Nested HTML Elements 7"),
//   ])
// );

// Step 2: Create Root element

// const reactRoot = ReactDOM.createRoot(document.querySelector(".container"));
// Step 3: Render React Element over the Web page

// reactRoot.render(reactEle);
