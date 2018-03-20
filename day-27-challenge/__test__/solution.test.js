'use strict';

const { Stack } = require('../solution.js');
require('jest');

let exampleStack = new Stack();
exampleStack.push(16);
exampleStack.push(12);
exampleStack.push(12);
exampleStack.push(1);
exampleStack.push(11);
exampleStack.push(-1111);
exampleStack.push(15);
exampleStack.push(-11);

describe('stack modules', () => {
  describe('peek', ()=> {
    it('should return the value of the top node', (done) => {
      let result = exampleStack.peek();
      expect(result.val).toEqual(-11);
      done();
    });
  });
  describe('getMin', () => {
    it('should return smallest val in stack', (done) => {
      let result = exampleStack.getMin();
      expect(result).toEqual(-1111);
      done();
    });
  });
  describe('#pop', () => {
    it('should pop off top val', done => {
      let result = exampleStack.pop();
      expect(result.val).toEqual(-11);
      done();
    });
  });
  describe('stacks module', () => {
    describe('#push', () => {
      it('should push a val to the stack', done => {
        let result = exampleStack.push(33);
        expect(result.val).toEqual(33);
        done();
      });
    });

  });
});