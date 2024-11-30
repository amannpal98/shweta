/*
 * http://love.hackerzhou.me
 */

// Variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

// Resize handler: reloads the page if the window dimensions change
$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
    // Typewriter effect
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1; // Skip HTML tags
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer); // Stop when all text is displayed
				}
			}, 75); // Typing speed
		});
		return this;
	};
})(jQuery);

// Calculates time elapsed since the specified date
function timeElapse(date) {
	var current = new Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;

	var years = Math.floor(seconds / (365 * 3600 * 24)); // Calculate years

    seconds = seconds % (365 * 3600 * 24);
    var days = Math.floor(seconds / (3600 * 24)); // Calculate days
    if (days < 10) {
        days = "0" + days;
    }

	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600); // Calculate hours
	if (hours < 10) {
		hours = "0" + hours;
	}

	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60); // Calculate minutes
	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	seconds = seconds % 60; // Calculate seconds
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	// Display the result
	var result = " <span class=\"digit\">" + years + " years</span> <span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds";
	$("#clock").html(result);
}
