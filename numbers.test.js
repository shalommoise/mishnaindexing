const {getNumbers} = require('./numbers');

describe('getNumbers', ()=>{
  test('returns empty array ', () => {
   expect(getNumbers()).toEqual([]) 
  });
})
