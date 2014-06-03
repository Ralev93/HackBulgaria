"use strict"

var tmp = require("./sum").sum;

exports.testSum = function(test) {
	test.throws(
		function() {
			tmp("1","2");
		});
	test.done();

};