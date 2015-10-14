var remote = require('remote');
var app = remote.require('app');

var timerStarted = false;

window.$ = window.jQuery = require('./scripts/jquery-2.1.4.min.js');

$(document).ready(function(){
	$('.settings').hide();
});

// new Notification("Roar");

$(".timer h1").click();

$(".menu button").click(function() {

    $(".timer").fadeToggle(100);
    $(".tasks").toggleClass("hidden");

    if ($(this).text() == "Tasks") {
        $(this).text("Timer");
    } else {
        $(this).text("Tasks");
    }
});

$(".settings_button img").click(function(){

	if(!timerStarted) {
		
		if(!$('.settings').is(":visible")) {
			$(".main").fadeToggle(500, function() {
				$('.settings').fadeToggle(500);
			});	
		}else {
			$(".settings").fadeToggle(500, function() {
				$('.main').fadeToggle(500);
			});
		}
		
		$(this).toggleClass("spin");
			
	}

});


function start() {

    if (!timerStarted) {

    	$(".start_button").hide();
    	$(".settings_button").toggleClass("hover");

    	timerStarted = true;
        // set the date we're counting down to
        var countdown = document.getElementById("timer");

        var target_date = new Date();
        target_date.setMinutes(target_date.getMinutes() + 25);

        // variables for time units
        var days, hours, minutes, seconds;

        // get tag element

        // update the tag with id "countdown" every 1 second
        var timer = setInterval(function() {

            // find the amount of "seconds" between now and target
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;

            // do some time calculations
            days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;

            hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;

            minutes = parseInt(seconds_left / 60);
            seconds = parseInt(seconds_left % 60);

            // format countdown string + set tag value
            countdown.innerHTML = minutes + ":" + seconds;

            console.log(minutes);

            if (minutes == 0 && seconds == 0) {
                new Notification("Timer OVER");
                clearInterval(timer);
                timerStarted = false;
                
                $(".start_button").show();
            }

        }, 1000);
    }
}
