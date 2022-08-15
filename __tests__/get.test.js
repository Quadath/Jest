import get from "../src/get";

const arr = [1, 2, 3, 4];
get(arr, 1) // 2
get(arr, 5, 'nothing') // 'nothing'
get(arr, 5) // null

test('get function', () => {
    expect(get(arr, 1)).toBe(2);
    expect(get(arr, 5, 'nothing')).toBe('nothing');
    expect(get(arr, 5)).toBeNull()
})