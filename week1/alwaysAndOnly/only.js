"use strict"

var only = function(type, arr) {
	var boolArr = arr.map(function (elem) {
		return typeof elem === type;
	});
	return boolArr.every(function (bl) {
		return bl === true;
		});
}

