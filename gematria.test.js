

const { describe, expect } = require('@jest/globals');
const {convert, mishnaNumbers}= require('./gemetria');

describe('convert()', ()=>{
  describe('simple cases', ()=>{
    test('returns empty string for no input', () => {
      expect(convert()).toBe('')
    });
    test('returns empty string for input = 0', () => {
      expect(convert(0)).toBe('')
    });
      test('returns one letter', () => {
      expect(convert(1)).toBe('א')
    });
    test('works for 1-10', ()=>{
      expect(convert(1)).toBe('א');
      expect(convert(2)).toBe('ב');
      expect(convert(3)).toBe('ג');
      expect(convert(4)).toBe('ד');
      expect(convert(5)).toBe('ה');
      expect(convert(6)).toBe('ו');
      expect(convert(7)).toBe('ז');
      expect(convert(8)).toBe('ח');
      expect(convert(9)).toBe('ט');
      expect(convert(10)).toBe('י');
    })
  })
  describe('harder cases', ()=>{
test('works for 11', () => {
 expect(convert(11)).toBe('יא')

});
test('random cases', () => {
   expect(convert(13)).toBe('יג');
   expect(convert(27)).toBe('כז');
   expect(convert(99)).toBe('צט');
   expect(convert(46)).toBe('מו'); 
    expect(convert(53)).toBe('נג'); 
});
test('15 & 16 (unique cases)', ()=>{
  expect(convert(15)).toBe('טו');
  expect(convert(16)).toBe('טז')

})
  })
})

describe('mishnaNumbers()', ()=>{
  test('returns empty string', () => {
    expect(mishnaNumbers()).toBe('')
  });
  test('works for simple case', () => {
    expect(mishnaNumbers(1.1)).toBe("א:א");
    expect(mishnaNumbers(15.24)).toBe("טו:כד")
  });
})