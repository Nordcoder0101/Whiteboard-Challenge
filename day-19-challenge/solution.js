'use strict';

let nums = [1,2,3]

var minMoves = function(nums) {
  nums.sort((a, b) => a - b);
  let mid = 0;
  let len = nums.length;
  if(len % 2 === 1){ // 奇数
      mid = Math.round(nums[Math.round((len - 1) / 2)]);
  }
  else{
      mid = Math.round((nums[Math.round((len - 2) / 2)] + nums[Math.round(len / 2)]) / 2);
  }
  let total = 0;
  nums.forEach((obj) => {
      total += Math.abs(obj - mid);
  });
  console.log(total)
  return total;
};

minMoves(nums);