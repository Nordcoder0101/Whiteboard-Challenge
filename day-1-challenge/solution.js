'use strict'

arrayMath = function (arrayOfNumbers) {
  let highest = 0;
  let lowest = 0;
  let sum = 0;
  let average = 0;

  for(var i = 0; i < arrayOfNumbers.length; i++) {
    if(arrayOfNumbers[i] > highest) {
      highest = arrayOfNumbers[i];
    }
    if(arrayOfNumbers[i] < lowest) {
      lowest = arrayOfNumbers[i];
    }
    sum += arrayOfNumbers[i];
  }
  average = sum / arrayOfNumbers.length;

  let solution = {
    highest : highest,
    lowest : lowest,
    average : average
  }
  return solution;
}