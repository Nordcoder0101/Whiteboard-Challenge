'use strict';



module.exports = function(list) {
  

  let arr = [];
    
  let current = list.root;

  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  arr.reverse();
  console.log(arr);
  
  current = list.root;
  for( var i = 0; i < arr.length; i++) {
    current.val = arr[i];
    current = current.next;
  }   
  return list;
};

