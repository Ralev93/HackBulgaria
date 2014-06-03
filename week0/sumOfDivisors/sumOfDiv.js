"use strict"

var sum_of_divisors = function(n) {
 var 
 	arr = [],
 	sum = 0;

 for (var i = 1; i <= n; i++) {
 	arr[i-1] = i;  
 }

 arr = arr.filter(function (elem) {
  return (n % elem === 0);})

 for (var i = 0; i < arr.length; i++) {
  	sum += arr[i];
  }

  return sum;
}

exports.sumDiv = sum_of_divisors;