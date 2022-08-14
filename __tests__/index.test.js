import {without} from 'lodash';

test('reverse', () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
});