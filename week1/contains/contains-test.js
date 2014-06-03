"use strict"

var tmp = require("./contains").contains;

exports.testTrueContain = function (test) {
	var arr = [1, 2, 4];

	test.equal(true, tmp (2, arr));
	test.done();
};

exports.testFalseContain = function (test) {
	var arr = [1, 2, 4];

	test.equal(false, tmp (0, arr));
	test.done();
};