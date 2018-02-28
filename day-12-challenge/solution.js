'use strict';

function isPalindrome(ll) {
  var valArray = [];
  var current = ll.root;
  
  valArray.push(current.val);
  
  while(current.next !== null) {
    current = current.next;
    valArray.push(current.val);
  }
  
  console.log('valArray array:', valArray);
  console.log('valArray.reverse():', valArray.reverse());
  let a = valArray.toString();
  let b = valArray.reverse().toString();
  if(a === b) {
    return true;
  } else {
    return false;
  }
};