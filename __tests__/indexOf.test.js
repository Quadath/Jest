import indexOf from "../src/indexOf";

const arr = [1, 2, 3, 2, 5];

test('indexOf function', () => {
    expect(indexOf(arr, 2)).toBe(1);
    expect(indexOf(arr, 7)).toBe(-1);
    expect(indexOf(arr, 2, -3)).toBe(3);
})