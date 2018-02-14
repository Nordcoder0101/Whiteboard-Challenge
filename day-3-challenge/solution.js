'use strict';

let engine = {value:2,
  next: {
    value: 6,
    next: {
      value: 8,
      next: {
        value: 2,
        next: {
          value: 6,
          next: {
            value: 3
          },
        },
      },
    },
  }};


function traverse(obj) {
  let arr = [];
  let nextCar = (obj);
  console.log(nextCar);

  while(nextCar.next) {
    console.log(nextCar);
    arr.push(nextCar.value);
    console.log(nextCar.value);
    nextCar = (nextCar.next);
    console.log(nextCar);
  }
  
  return arr.reduce((a,b) => a + b);
}

traverse(engine);