import makeCart from "../src";

const cart = makeCart();

test('makecart', () => {
  cart.addItem({ name: 'car', price: 3 }, 5);
  cart.addItem({ name: 'house', price: 10 }, 2);

  expect(cart.getItems().length).toBe(2);
  expect(cart.getCost()).toBe(35);

  cart.addItem({ name: 'boat', price: 15 }, 1);

  expect(cart.getItems().length).toBe(3)
  expect(cart.getCost()).toBe(50)
})