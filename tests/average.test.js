import test, { describe } from "node:test";
import assert from "node:assert/strict";
import { average } from "../utils/for-testing.js";

describe("average", () => {
  test("of one value is the value itself", () => {
    const result = average([1]);
    assert.strictEqual(result, 1);
  });

  test("of many is calculated right", () => {
    const result = average([1, 2, 3]);
    assert.strictEqual(result, 2);
  });
});

test("of empty array is NaN", () => {
  const result = average([]);
  assert(Number.isNaN(result));
});
