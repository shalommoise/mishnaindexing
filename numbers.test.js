
const {getNumbers,getChapter, getVerse} = require('./numbers');

describe('getNumbers', ()=>{
  test('returns empty array ', () => {
   expect(getNumbers()).toEqual([]) 
  });
  test('returns, [1.1,1.2,1.3,1.4] ', () => {
       expect(getNumbers(1.1,1.4)).toEqual([1.1,1.2,1.3,1.4]) 
  });
  test('works for end of chapter', () => {
       expect(getNumbers(1.5,2.2)).toEqual([1.5,1.6,2.1,2.2]) 
  });
test('works for last mishna of 1', ()=>{
  expect(getNumbers(1.5,2.3)).toEqual([1.5,2.1,2.2, 2.3])
})
test('ends with new Chapter', ()=>{
  expect(getNumbers(1.5,2.1)).toEqual([1.5,1.6,1.7, 2.1])
})
test('random tests', ()=>{
  expect(getNumbers(1.5,2.1)).toEqual([1.5,1.6,1.7, 2.1]);
   expect(getNumbers(1.6,2.1)).toEqual([1.6,1.7,1.8, 2.1]);
   expect(getNumbers(30.5,30.8)).toEqual([30.5,30.6,30.7,30.8]);
 
})
test('two chapters', () => {
    expect(getNumbers(12.3,14.1)).toEqual([12.3,13.1,13.2,14.1]);
      expect(getNumbers(12.3,14.2)).toEqual([12.3,13.1,14.1,14.2]);
});
test('only 2 mishnayos', () => {
  expect(getNumbers(1.5,1.6)).toEqual([1.5,1.6])
});
test('only 3 mishnayos', () => {
  expect(getNumbers(1.5,1.7)).toEqual([1.5,1.6,1.7])
});
});


describe('getChapter', ()=>{
test("returns empty string", ()=>{
expect(getChapter()).toBe('')
})
test('simple cases ', () => {
  expect(getChapter(1.5)).toBe(1)
   expect(getChapter(1.9)).toBe(1)
    expect(getChapter(25.13)).toBe(25)
});
});

describe('getVerse', ()=>{
test("returns empty string", ()=>{
expect(getVerse()).toBe('')
})
test('simple cases ', () => {
  expect(getVerse(1.5)).toBe(5)
   expect(getVerse(1.9)).toBe(9)
    expect(getVerse(25.13)).toBe(13)
});
});