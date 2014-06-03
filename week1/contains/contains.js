"use strict"

var contains = function (element, arr) {
/*
	var helper = function (i) {
	if ( i === arr.length - 1) {
			return false;
		}

		if (element === arr[i]) {
			return true;
		}
		else {
			helper(i++);
		}
	}

 helper(0);
*/

	return arr.some(function (i) {
		return i === element;
	})
};

//contains(2, [1, 2, 4]);

exports.contains = contains;