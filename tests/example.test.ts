/* Remove this example test file once you start writing your own tests. */

import { expect, test } from "vitest";

function sum(a: number, b: number): number {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
