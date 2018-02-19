'use strict';

let array = [1, 3, 6, 7, 9];
let newArr = [];

let noNumFinder = function(arr) {
  
  arr.sort();
  var highest =  arr[arr.length - 1];
  console.log(highest);
  for(let j = 1; j < highest; j++) {
    if(!arr.includes(j)) {
      newArr.push(j);
      
    } 
  }  
  
  console.log(newArr);
  return newArr;
};

noNumFinder(array);