import { chunk } from "./data";

test("chunk() test", () => {
  expect(chunk([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]]);
  expect(chunk([1, 2, 3, 4], 2)).toEqual([
    [1, 2],
    [3, 4],
  ]);
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
});
