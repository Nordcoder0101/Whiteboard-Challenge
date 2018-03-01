'use strict';

let reverse = require('../day-13-solution.js');
require('jest');

describe('day-13-solution.js', function() {
  var list = {
    root:{
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: null
          }
        }
      }
    }
  };
  it('should return an array', function(done) {
    let result = reverse(list);
    console.log(result);
    expect(typeof result.root.val).toBe('integer');
    done();
  });
});

