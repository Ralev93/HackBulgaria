"use strict"
var elena = require("./sumMinMax").sumMinMax;

/*
sum_of_min_and_max([1,2,3,4,5,6,8,9]) === 10
sum_of_min_and_max([-10,5,10,100]) === 90
sum_of_min_and_max([1]) === 2
*/

exports.testForLargeArr = function (test) {
	test.equal(10, elena([1,2,3,4,5,6,8,9]));
	test.done();
}


exports.testForMidArr = function (test) {
	test.equal(90, elena([-10,5,10,100]));
	test.done();
}

exports.testForSingletonArr = function (test) {
	test.equal(2, elena([1]));
	test.done();
}