
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

var numbers = [1,2,3,4,5,6,7,8,9];

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

console.log(groupBy(function(name) {
  return name.course;
}, names));