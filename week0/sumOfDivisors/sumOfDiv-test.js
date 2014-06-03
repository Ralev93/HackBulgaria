var komara  = require("./sumOfDiv").sumDiv;

/*
sum_of_divisors(8) === 15
sum_of_divisors(7) === 8
sum_of_divisors(1) === 1
sum_of_divisors(1000) === 2340

*/
exports.testSumOfDivOf8 = function(test) {

test.equal(15, komara(8));
test.done();
};


exports.testSumOfDivOf7 = function(test) {

test.equal(8, komara(7));
test.done();
};

exports.testSumOfDivOf1 = function(test) {

test.equal(1, komara(1));
test.done();
};

exports.testSumOfDivOf1000 = function(test) {

test.equal(2340, komara(1000));
test.done();
};
