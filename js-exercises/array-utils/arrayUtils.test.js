// Write your own test cases.

import { NewForEachImpl, NewMapImpl, MyFilterImpl, MyReduceImpl } from './arrayUtils';

describe(' ForEach Implementation ', () => {
  test('should get the sum of the elements in the array', () => {
    expect(NewForEachImpl([1, 2, 3, 4, 5, 6])).toBe(21);
    expect(NewForEachImpl(['a', 'b', 'c'])).toBe('0abc');
    expect(NewForEachImpl([2, 4, 7, 33, 78, -4])).toBe(120);
  });
});

describe(' Map Implementation ', () => {
  test('should return an array with values x 10', () => {
    expect(NewMapImpl([1, 2, 3, 4, 5, 6])).toStrictEqual([10, 20, 30, 40, 50, 60]);
    expect(NewMapImpl([2, 4, 7, 33, 78])).toStrictEqual([20, 40, 70, 330, 780]);
  });
});

describe(' Filter Implementation ', () => {
  test('should return an array with values greater than average', () => {
    expect(MyFilterImpl([1, 2, 3, 4, 5, 6])).toStrictEqual([4, 5, 6]);
    expect(MyFilterImpl([2, 4, 7, 33, 78])).toStrictEqual([33, 78]);
  });
});

describe(' Reduce Implementation ', () => {
  test('should return the sum of the array items', () => {
    expect(MyReduceImpl([1, 2, 3, 4, 5, 6],0)).toBe(21);
    expect(MyReduceImpl([2, 4, 7, 33, 78],0)).toBe(124);
  });
});