"use strict"


var sum_of_min_and_max = function(arr) {
  arr.sort(function(a, b){return a-b;})
  return arr[0] + arr[arr.length - 1];

 }

 exports.sumMinMax = sum_of_min_and_max;