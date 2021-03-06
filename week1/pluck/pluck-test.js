"use strict"

var f = require("./pluck").pluck

exports.testForStudents = function (test) {
  var targetList = [ "Daniel Taskoff",
                     "Elena Jeleva",
                     "Luboslava Dimitrova",
                     "Anton Antonov", 
                     "Nikola Dichev"],
      students = [{
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

  test.equal(targetList.toString(), f ("name", students).toString())
  test.done();
};
