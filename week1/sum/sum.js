"use strict";

var sum = function(a,b) {
	if((typeof a === "number") && (typeof b === "number")) {
		return a + b;
	}
	else {
		throw new TypeError("a & b are not numbers");
	}

}

exports.sum = sum;