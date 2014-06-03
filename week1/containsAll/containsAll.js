
"use strict"

var contains = require("../contains/contains").contains;

var containsAll = function (elements, arr) {

	return ( elements.every(function (i) {
		return contains(i,arr);
	} ));

};


exports.containsAll = containsAll;


// ([1,2,3],[1,2,34,45,3])