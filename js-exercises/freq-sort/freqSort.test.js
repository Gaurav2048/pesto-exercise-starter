import { freqSort } from './freqSort';

describe('Template Test', () => {
  test('Template Test', () => {
    expect(freqSort([])).toStrictEqual([]);
    expect(freqSort(["a", "z", "z", "z", "b", "b", "z"])).toStrictEqual([ 'z', 'b', 'a' ]);
    expect(freqSort(["e" ,"r", "e", "r", "q",  "q",  "w", "r", "e", "q", "w", "w","q","q", "r", "q", "e", "q", "r"])).toStrictEqual(["q", "r", "e", "w" ])
  });
});
