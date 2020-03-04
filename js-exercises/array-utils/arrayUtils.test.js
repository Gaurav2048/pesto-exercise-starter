// Write your own test cases.

import { NewForEachImpl } from './arrayUtils';

describe(' ForEach Implementation ', () => {
  test('should get the sum of the elements in the array', () => {
    expect(NewForEachImpl([1,2,3,4,5,6])).toBe(21);
    expect(NewForEachImpl(['a','b','c'])).toBe('0abc');
    expect(NewForEachImpl([2,4,7,33,78,-4])).toBe(120);
  });
});