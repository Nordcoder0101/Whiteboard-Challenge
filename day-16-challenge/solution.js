'use strict';

module.exports = function(q, val) {
  q[q.length] = val;
  if(!q.next) q.next = 0;
  q.length++;

  console.log(q);
  return q;
};