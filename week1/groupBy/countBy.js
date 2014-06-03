var names = [{
  "name" : "Daniel Taskoff",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Elena Jeleva",
  "course" : "Programming 101"
}, {
  "name" : "Luboslava Dimitrova",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Anton Antonov",
  "course" : "Core Java"
}, {
  "name" : "Nikola Dichev",
  "course" : "Core Java"
}];


var groupBy = function(groupingFunction, arr) {
	var result = {}
	
	 arr.forEach(function(elem) {
    var group = groupingFunction(elem).toString();
		if (!result[group]) {
			result[group] = [];
		}
		result[group].push(elem);
		
	})
	return result;
}
/*
console.log(groupBy(function(name) {
  return name.course;
}, names));

*/
var countBy = function(countingFunction, arr) {
	
	var grouped = groupBy(countingFunction,arr);

	var result = {};

	Object.keys(grouped).forEach(function (g) {
		var c = grouped[g].length;
		result[g] = [];
		result[g] = c;
		
			}); 
	return result;
};

console.log(countBy(function(name) {
  return name.course;
}, names));