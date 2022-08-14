import { gt } from "lodash";

test('4 greater than 3', () => {
  expect(gt(3, 4)).toBeFalsy()
  expect(gt(4, 3)).toBeTruthy()
})