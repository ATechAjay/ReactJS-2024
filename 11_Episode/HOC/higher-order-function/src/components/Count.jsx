import withHOC from "./withHOC";

function ClickCounter(props) {
  const { count, incrementCount } = props;
  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <p>Clicked: {count}</p>
    </div>
  );
}
export default withHOC(ClickCounter, 20);
