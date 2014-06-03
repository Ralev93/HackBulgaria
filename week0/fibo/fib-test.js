"use strict"

var fibonacci = require("./fib").fib;


/*
nth_fibonacci(1) === 1
nth_fibonacci(2) === 1
nth_fibonacci(3) === 2
nth_fibonacci(10) === 55

*/

exports.testFibonacciForOne = function(test) {

	test.equal(1,fibonacci(1));
	test.done();
}


exports.testFibonacciForTwo = function(test) {

	test.equal(1,fibonacci(2));
	test.done();
}


exports.testFibonacciForThree = function(test) {

	test.equal(2,fibonacci(3));
	test.done();
}


exports.testFibonacciForTen = function(test) {

	test.equal(55,fibonacci(10));
	test.done();
}