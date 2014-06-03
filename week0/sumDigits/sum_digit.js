"use strict"


var sum_of_digits = function(n) {
 var n = Math.abs(n);
 return sum_of_digits_helper(n, 0);
}

var sum_of_digits_helper = function(n, sum) {

if (n < 10) {
	return (sum + n);
}
else {
	sum = sum + (n % 10)
	return sum_of_digits_helper(Math.floor(n/10), sum);
}


}
exports.sumDig = sum_of_digits;