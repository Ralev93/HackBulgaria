"use strict"

var elena = require("./sum_digit").sumDig;

/*
sum_of_digits(1325132435356) === 43
sum_of_digits(123) === 6
sum_of_digits(6) === 6
sum_of_digits(-10) === 1
*/

exports.testSumOfBig = function (test) {
	test.equal(43, elena(1325132435356));
	test.done();
};


exports.testSumOfDigit = function (test) {
	test.equal(6, elena(6));
	test.done();
};
exports.testSumOfNegariveNumber = function (test) {
	test.equal(1, elena(-10));
	test.done();
};
