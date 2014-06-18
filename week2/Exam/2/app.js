"use strict";
var
  nIntervId = 0,
  minutes = 0,
  seconds = 0;

var appendTimer = function (min, sec) {
  if (sec < 10) { 
    $("#second-second-digit").text(sec.toString()[0]);
    $("#second-first-digit").text(0);
  }
  else {
    $("#second-second-digit").text(sec.toString()[1]);
    $("#second-first-digit").text(sec.toString()[0]);
  }
  
  if (min < 10) { 
    $("#minute-second-digit").text(min.toString()[0]);
    $("#minute-first-digit").text(0);
  }
  else {
    $("#minute-second-digit").text(min.toString()[1]);
    $("#minute-first-digit").text(min.toString()[0]);
  }
};

function terminate() {
  clearInterval(nIntervId);
};

function begin(f) {
  nIntervId = setInterval(f, 1000);
};

$(document).ready(function() {
  $("#minutes").on("click keypress", function () {
    minutes = parseInt($("#minutes").val(), 10);
    appendTimer(minutes,seconds);
  });

  $("#seconds").on("click keypress", function () {
    seconds = parseInt($("#seconds").val(), 10);
    appendTimer(minutes,seconds);
  });

  $("#startDown").on("click", function() {
    terminate();
    var 
      m = minutes,
      s = seconds;
    
    begin(function () {
      s -= 1;
      if (s < 0) {
        m -= 1;
        s = 59;
      }
      if (m < 0) {
        m = s = 0;
        terminate();
      }
      appendTimer(m, s);
    });
  });

  $("#startUp").on("click", function() {
    terminate();
    var m = 0, s = 0;
    
    begin(function () {
      s += 1;
      if (s > 59) {
        m += 1;
        s = 0;
      }
      if (m === minutes && s === seconds) { 
        terminate();
      }
      appendTimer(m, s);
    });
  });

  $("#StopAndReset").on("click", function() {
    terminate();
    appendTimer(0,0);
  });
});
