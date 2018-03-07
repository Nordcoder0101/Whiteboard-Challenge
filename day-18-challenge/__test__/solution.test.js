'use strict';

const findConsec = require('../solution.js')

let array = [1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1]

describe('consecutive routes.js', function() {
  describe('with a valid array', function() {
    it('should return consecutive highest value', function() {
      let res = findConsec(array);
      expect(res).toEqual(10);
      expect(typeof res).toEqual('number')
    })
  })
})