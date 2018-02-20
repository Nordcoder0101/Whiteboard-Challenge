'use strict';

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let missNum;

let find = function(arr1) {
  for (let i = 0 ; i <= 15; i++) {
    if(i !== arr1[i + 1]) {
      console.log(arr1[i]);
      missNum = i;

    }
  }
    
  console.log (missNum);
  return missNum;
};

find(arr1);