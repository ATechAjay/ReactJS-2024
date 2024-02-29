// __dunder__ == dunder test

import { sum } from "../../utils/sum";

test("Sum function should summed the two number", () => {
  const result = sum(3, 4);

  //   Assertion
  expect(result).toBe(7);
  //   expect(result).toBe(17);
});
