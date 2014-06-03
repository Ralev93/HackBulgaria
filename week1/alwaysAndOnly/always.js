"use strict"

var always = function(value) {
	return function() {
		return value;
	};
};
