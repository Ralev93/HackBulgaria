"use strict"

var zip = function() {
	var 
		arg = arguments, // !!!!!!!!!!!!! защо ?????
		values = Object.keys(arg).map(function(key) {return arg[key];}),
		result = [],
		innerList = [];

	for ( var i = 0; i < values[0].length; i++) {
		values.map(function (value) {
			innerList.push(value[i]);	
		});
		result.push(innerList)
		innerList = [];
	}

	return result;

}
console.log(zip([1,2,3],[4,5,6]));
console.log(zip([1,2],[4,5],[6,7]));


exports.zip = zip;
