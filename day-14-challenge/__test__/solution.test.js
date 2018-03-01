'use strict';

let findNode  = require('../solution.js');
require('jest');

describe('solution.js', function() {
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
  it('should return an integer', function(done) {
    let result = findNode(list, 3);
    console.log(result);
    expect(typeof result.root.val).toBe('number');
    done();
  });
});
