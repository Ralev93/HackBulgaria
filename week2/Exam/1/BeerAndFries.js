"use strict";


var beerAndFries = function (items) {
	var
		scores = function (type) {
			var result = [];

			items.filter(function (item) {
				return item.type === type;
			}).forEach(function (item) {
				result.push(item.score);
			});

			return result;
		},

		descending = function (a,b) {
			return b - a;
		},

		result = 0,
		friesScores = scores("fries").sort(descending),
		beerScores  = scores("beer").sort(descending);

		beerScores.forEach(function (beerScore,i) {
			result += beerScore * friesScores[i];
		});

		return result;

};

exports.beerAndFries = beerAndFries;

