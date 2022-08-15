import slice from "../src/slice";

const arr = [1, 2, 3, 4, 5];

test('slice function', () => {
    expect(slice(arr)).toStrictEqual([1, 2, 3, 4, 5])
    expect(slice(arr, 1, 4)).toStrictEqual([2, 3, 4])
    expect(slice(arr, -4, -2)).toStrictEqual([2, 3])
    expect(slice(arr, 7)).toStrictEqual([])
})