"use strict"

var tmp = require("./containsAll").containsAll;

exports.testTrueContainAll = function (test) {
	var arr = [1, 2, 4];

	test.equal(true, tmp (arr, [1, 2, 4, 5, 6]));
	test.done();
};

exports.testFalseContainAll = function (test) {
	var arr = [1, 2, 4];

	test.equal(false, tmp (arr, [1, 2, 5, 67, 8]));
	test.done();
};