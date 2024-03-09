import { useState } from "react";

const withHOC = (OldComponent, incrementBy) => {
  return function NewComponent() {
    const [count, setCount] = useState(incrementBy);

    return (
      <>
        <OldComponent
          count={count}
          incrementCount={() => setCount(count + incrementBy)}
        />
      </>
    );
  };
};

export default withHOC;
