"use strict"

var f = require("./contains").contains;

exports.testTrueContain = function (test) {
	var arr = [1, 2, 4];

	test.equal(true, f(2, arr));
	test.done();
};

exports.testFalseContain = function (test) {
	var arr = [1, 2, 4];

	test.equal(false, f(0, arr));
	test.done();
};