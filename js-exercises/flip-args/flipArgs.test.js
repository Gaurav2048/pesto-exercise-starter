// write your own test cases

import { flipArgs } from './flipArgs';

// describe(' Flip Arguements  ', () => {
//   test('should get the sum of the elements in the array', () => {
//     expect(NewForEachImpl([1, 2, 3, 4, 5, 6])).toBe(21);
//     expect(NewForEachImpl(['a', 'b', 'c'])).toBe('0abc');
//     expect(NewForEachImpl([2, 4, 7, 33, 78, -4])).toBe(120);
//   });
// });


// describe('Flip arguements', () => {
//   test('should concat characters in reverse order ', () => {
//     const reverseArray = function (...args) {
//      var data = ""
//      for(var i=0;i<args.length; i++){
//        data += args[i]
//      }
//      return data;
//     }
//     expect(flipArgs(reverseArray('a','b', 'c'))).toBe('cba');
//   });
// });

describe('Flip arguements', () => {
  test('should concat characters in reverse order', () => {
    // eslint-disable-next-line func-names
    const reverseArray = function (...args) {
      let data = '';
      // eslint-disable-next-line vars-on-top
      for (let i = 0; i < args.length; i += 1) {
        data += args[i];
      }
      return data;
    };
    expect(flipArgs(reverseArray('a', 'b', 'c'))).toBe('cba');
  });
});
