"use strict"
var contains = require("../contains/contains").contains;

var containsAll = function (elements, arr) {
	return (elements.every(function (i) {
		return contains(i,arr);
	}));
};


exports.containsAll = containsAll;
