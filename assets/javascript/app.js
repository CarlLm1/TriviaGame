/* // JS //

The commented JavaScript makes the timer not work, I was able to get the timer to work but the other coding doesn't seem to want to function correctly.


$(document).ready(function () {













    // Variables
    var number = 60;
    var intervalId;
    var correctCount = 0;
    var wrongCount = 0;
    var unanswered = 0;



    // Display summary function
    function displaySummary() {
        $('.results').show();
        unanswered = (8 - (correctCount + wrongCount));
        $('#correctScore').text("Correct Answers:" + " " + correctCount);
        $('#wrongScore').text("Wrong Answers:" + " " + wrongCount);
        $('#unanswered').text("Unanswered:" + " " + unanswered);
    }


    //Done Button click
    $('#done').on('click', function () {
        $('#start').hide();
        hide();
        displaySummary();
    });

    //Radio
    $('input[type=radio]').on('change', function () {
        correctCount = $('input[value=correct]:checked').length;
        wrongCount = $('input[value=wrong]:checked').length;
        unanswered = (8 - (correctCount + wrongCount));
    });
}); */

var secondsDown = 60;
	 var timeIntervalUp = setInterval(function(){startTimer()}, 1000);

    function startTimer(){ 
            document.getElementById("countDown").innerHTML = "Time Remaining: " + secondsDown;
            secondsDown--;
			
             if (secondsDown == 0) {
                clearInterval(timeIntervalUp);
                endTimer();
                reload();
            }
        }
		
    function endTimer() {   
        document.getElementById("countDown").innerHTML = "Time ran out";
    }