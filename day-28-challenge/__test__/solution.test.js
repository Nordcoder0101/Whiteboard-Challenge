'use strict'

const solution = require('../solution.js');

describe('solution.js', function() {
  it('should return the length of the results array', function(done) {
    let testArray = ['try', 'lime', 'pot', 'sag']
    let result = solution.qwertyCheck(testArray);
    expect(result.length).toEqual(3);
    expect(result).toEqual(['try', 'pot', 'sag'])
    done();
  })
})