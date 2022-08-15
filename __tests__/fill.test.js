
import fill from "../src/fill";
const array =  [1, 2, 3, 4];
test('fill test', () => {
    fill(array, '*', 1, 3)
    expect(array).toStrictEqual([1, '*', '*', 4]);
    fill(array, '*')
    expect(array).toStrictEqual(['*', '*', '*', '*']);
    fill(array, 'a', 1, 6)
    expect(array).toStrictEqual(['*', 'a', 'a', 'a']);
})