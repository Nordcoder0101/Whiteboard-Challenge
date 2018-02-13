'use strict';

const solution = require('../solution.js');
require('jest');

describe('Solution Module', function () {
  describe('#solution', function() {
    it('should allow for floating point integer', function() {
      var result = solution.solution([31.1, 52.2, 27.3, 2.55, 55.1, 65.9]);
      expect(result).toEqual(65.9, 55.1);
    });

    it('should have a missing array of numbers error', function() {
      expect(solution.solution).toThrow();
      expect(solution.solution).toThrow('numerical array not provided');
    });

    it('shuold have the highest as a greater number than the second highest', function() {
      var result = solution.solution([31, 52, 27, 2, 55, 65]);
      expect(result).toEqual(highest > secondHighest);
    });

    it('should return 2 property values', function(){
      var result = solution.solution([31, 52, 27, 2, 55, 65]);
      expect(result).toEqual(typeof result === 'number');
    });
  });
});