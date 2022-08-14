const now = new Date();
let now1;

beforeEach(() => {
  now1 = new Date();
})

test('date delay', () => {
  expect(now.getTime()).not.toBe(new Date().getTime());
})