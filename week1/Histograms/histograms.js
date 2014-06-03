"use strict"

var contains = require("../contains/contains").contains;

var cleanString = function (string) {
	var 
		punctu = [',', ";", '?', '!'],
		result = "";
		i = 0;
	// caps? - GONE.
	string = string.toLowerCase();

	//same with the punctuations
	while (i < string.length) {
		if (!contains (string[i], punctu)) {
			result += string[i];
		}

		i++;
	}
	return result;
}

var wordsHistogram = function (string) {
	string = cleanString(string);
	var words  = string.split(" "),
		result = {};

	words.forEach( function (word) {
	    var l = words.filter(function (w) {
			return w === word;
		    }).length;

		result[word] = l;

	});

	return result;

}

var charsHistogram = function (string) {
	string = cleanString(string);
	var chars = string.split(""),
		result = {};

	chars.forEach(function (c) {
		if (c !== " ") { //escaping intervals
		    var l = chars.filter(function (_c_) { // filter returns new array
					    return _c_ === c;
			    	}).length;

			result[c] = l;

		}
	});

	return result;
}

//console.log(wordsHistogram("A function is a function with a very functional function!")); 

//console.log(charsHistogram("Count the characters in this very profound sentence"));

exports.wordsHistogram = wordsHistogram;
exports.charsHistogram = charsHistogram;
