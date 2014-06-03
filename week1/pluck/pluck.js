var pluck = function(property, arr) {

	var result = [];

	arr.forEach(function (obj) {
		var k = Object.keys(obj);
		k.forEach(function (key) {
			if (key === property) {
				result.push(obj[key]);
			}

		})
	})
	return result;
};
exports.pluck = pluck;