"use strict"

var f = require("./containsAll").containsAll;
var arr = [1, 2, 4];

exports.testTrueContainAll = function (test) {
	test.equal(true, f(arr, [1, 2, 4, 5, 6]));
	test.done();
};

exports.testFalseContainAll = function (test) {
	test.equal(false, f(arr, [1, 2, 5, 67, 8]));
	test.done();
};