"use strict";
var
  nIntervId = 0,
  minutes = 0,
  seconds = 0;

var appendTimer = function (min, sec) {
  $("#second-second-digit").text(sec%10);
  $("#second-first-digit").text(Math.floor(sec/10)%10);
  $("#minute-second-digit").text(min%10);
  $("#minute-first-digit").text(Math.floor(min/10)%10);
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
