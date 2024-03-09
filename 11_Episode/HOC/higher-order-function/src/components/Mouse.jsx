import withHOC from "./withHOC";
function HoverCounter({ count, incrementCount }) {
  return (
    <div>
      <button onMouseOver={incrementCount}>Increment</button>
      <p>Clicked: {count}</p>
    </div>
  );
}
export default withHOC(HoverCounter, 50);
