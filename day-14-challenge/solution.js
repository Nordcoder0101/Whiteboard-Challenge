'use strict';

module.exports = function(ll, nodeVal) {
  let current = ll.root;
  let arr = [];
  while(current.next !== null) {
    arr.push(current.val);
    current = current.next;
  }
  arr.push(current.val);
  console.log(arr);
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === nodeVal) arr.splice(i, 1);
  }
  // let returnLinkedlist = {val: 0, next: 0};
  current = ll.root;
  for(let i = 0; i < arr.length; i++) {
    current.val = arr[i];
    current = current.next;
    // console.log(ll);
  }
  current.next = null;
  console.log(ll);
  return ll;
};

 
const testList = {
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
};

